type HeadingTag = "h1" | "h2" | "h3"

export type TitleCardProps = {
    title: string;
    description?: React.ReactNode;
    align?: "left" | "centre";
    size?: "sm" | "md" | "lg";
    as?: HeadingTag;
    bg?: string;
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
    as = "h1",
    bg = "bg-white"
}: TitleCardProps) {
    const Heading = as;
  
    const sizeClasses = 
        size === "sm"
        ? "text-2xl"
        : size === "lg"
        ? "text-6xl md:text-5xl"
        : "text-4xl";

    const descSizeClasses =
        size === "sm"
        ? "text-sm"
        : size === "lg"
        ? "text-xl"
        : "text-lg md:text-md"
  
    const alignClasses = 
        align === "centre" 
        ? "text-center items-center" 
        : "text-left items-start";

    return (
        <section>
            <div className={cn("flex gap-4 p-20 text-black text-center", bg, align === "centre" && "md:w-full md:justify-center")}>
                <div className={cn("flex flex-col", alignClasses)}>
                    <Heading className={cn("font-extrabold font-sans leading-tight tracking-tight pb-4", size === "lg" && "pb-8", sizeClasses)}>
                        {title}
                    </Heading>
                    {description ? (
                    <p className={cn("max-w-prose text-slate-600", descSizeClasses, align === "centre" && "mx-auto")}>
                        {description}
                    </p>
                ) : null}
                </div>
            </div>
        </section>
    );
}
