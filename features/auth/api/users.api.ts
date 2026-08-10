import type { AuthUser } from "@/features/auth/types/user.types";

function getApiBaseUrl() {
  return process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";
}

export async function findUserByUsername(
  username: string,
): Promise<AuthUser | null> {
  const response = await fetch(
    `${getApiBaseUrl()}/users?username=${encodeURIComponent(username)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const users = (await response.json()) as AuthUser[];
  return users[0] ?? null;
}

export async function createUser(input: {
  username: string;
  password: string;
}): Promise<Omit<AuthUser, "password">> {
  const response = await fetch(`${getApiBaseUrl()}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  const user = (await response.json()) as AuthUser;
  return { id: user.id, username: user.username };
}
