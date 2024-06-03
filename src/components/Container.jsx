import classNames from "classnames"

export default function Container ({ className, children }) {
    let containerClasses = classNames('max-w-[860px]', 'mx-auto', className);

    return (
        <div className={containerClasses}>{children}</div>
    )
}