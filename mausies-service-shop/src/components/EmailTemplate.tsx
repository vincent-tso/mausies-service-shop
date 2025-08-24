import * as React from "react";

interface EmailTemplateProps {
    firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
            <p>Thank you for your inquiry. We will get back to you as soon as we can!</p>
        </div>
    );
}