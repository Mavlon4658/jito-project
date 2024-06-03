import classNames from "classnames"

export default function ButtonGreen ({ className, children }) {
    let containerClasses = classNames('bg-green-100 hover:bg-green-200 rounded-[2px] h-[41px] text-[15px] font-semibold', className);

    return (
        <button className={containerClasses}>
            {children}
        </button>
    )
}