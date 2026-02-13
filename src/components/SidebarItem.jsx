export default function SidebarItem({ title, icon: Icon, children, className = "items-center", iconClassName = "w-4 h-4" }) {
    return (
        <div>
            <h3 className="font-semibold text-teal-200">{title}</h3>
            <div className={`flex gap-2 ${className}`}>
                {Icon && <Icon className={`${iconClassName} shrink-0`} />}
                <div className="flex-1">
                    {children}
                </div>
            </div>
        </div>
    );
}
