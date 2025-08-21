type HeadingTag = "h1" | "h2" | "h3"

export type TitleCardProps = {
    title: string;
    description?: React.ReactNode;
    eyebrow?: string;
    icon?: React.ReactNode;
    align?: "left" | "centre";
    size?: "sm" | "md" | "lg";
    as?: HeadingTag;
    className?: string;
};

// AI-generated helper function to aid with className filtering
function cn(...xs: Array<string | false | null | undefined>) {
    return xs.filter(Boolean).join(" ");
}

export function TitleCard({
    title,
    description,
    align = "left",
    size = "md",
    as = "h1"
}: TitleCardProps) {
    const Heading = as;
  
    const sizeClasses = 
        size === "sm"
        ? "text-2xl"
        : size === "lg"
        ? "text-4xl md:text-5xl"
        : "text-3xl";
  
    const alignClasses = 
        align === "centre" 
        ? "text-center items-center" 
        : "text-left items-start";

    return (
        <section>
            <div className={cn("flex gap-4 p-20 bg-white text-black text-center", align === "centre" && "md:w-full md:justify-center")}>
                <div className={cn("flex flex-col", alignClasses)}>
                    <Heading className={cn("font-bold leading-tight tracking-tight pb-8", sizeClasses)}>
                        {title}
                    </Heading>
                    {description ? (
                    <p className={cn("max-w-prose text-slate-600", align === "centre" && "mx-auto")}>
                        {description}
                    </p>
                ) : null}
                </div>
            </div>
        </section>
    );
}
