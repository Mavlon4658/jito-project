import classNames from "classnames"

export default function ButtonGray ({ className, children }) {
    let containerClasses = classNames('bg-dark-blue-400 hover:bg-dark-blue-500 rounded-[2px] h-[41px] text-base font-semibold', className);

    return (
        <button className={containerClasses}>
            {children}
        </button>
    )
}