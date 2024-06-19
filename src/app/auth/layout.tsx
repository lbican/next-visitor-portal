import React from "react";

interface LoginPageLayoutProps {
    children?: React.ReactNode;
}

export default function LoginPageLayout({ children }: LoginPageLayoutProps) {
    return <div><p>Auth page wrapper</p>{children}</div>
}
