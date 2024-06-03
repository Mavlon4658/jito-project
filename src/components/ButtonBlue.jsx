import classNames from "classnames"

export default function ButtonBlue ({ className, children }) {
    let containerClasses = classNames('bg-light-blue-100 active:bg-light-blue-200 rounded-[2px] h-[41px] text-base font-semibold', className);

    return (
        <button className={containerClasses}>
            {children}
        </button>
    )
}