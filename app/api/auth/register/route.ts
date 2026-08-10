import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import {
  createUser,
  findUserByUsername,
} from "@/features/auth/api/users.api";
import { signUpSchema } from "@/features/auth/schemas/auth.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = signUpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "اطلاعات ثبت‌نام نامعتبر است" },
        { status: 400 },
      );
    }

    const { username, password } = parsed.data;
    const existingUser = await findUserByUsername(username);

    if (existingUser) {
      return NextResponse.json(
        { message: "این نام کاربری قبلاً ثبت شده است" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({
      username,
      password: hashedPassword,
    });

    return NextResponse.json(
      { id: user.id, username: user.username },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "خطا در ثبت‌نام. لطفاً دوباره تلاش کنید." },
      { status: 500 },
    );
  }
}
