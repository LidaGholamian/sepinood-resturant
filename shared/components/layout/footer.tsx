export function Footer() {
  return (
    <footer className="border-t border-border bg-forest-700">
      <div className="container mx-auto py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sepinood. All rights reserved.
      </div>
    </footer>
  );
}
