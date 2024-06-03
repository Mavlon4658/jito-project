import classNames from "classnames"

export default function ButtonRed ({ className, children }) {
    let containerClasses = classNames('bg-danger-100 hover:bg-danger-200 rounded-[2px] h-[41px] text-base font-semibold', className);

    return (
        <button className={containerClasses}>
            {children}
        </button>
    )
}