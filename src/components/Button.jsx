import classNames from "classnames"

export default function Button ({className, color = gray, children }) {
    const btnClass = {
        blue: classNames('bg-light-blue-100 active:bg-light-blue-200 rounded-[2px] h-[41px] text-base font-semibold', className),
        gray: classNames('bg-dark-blue-400 hover:bg-dark-blue-500 rounded-[2px] h-[41px] text-base font-semibold', className),
        green: classNames('bg-green-100 hover:bg-green-200 rounded-[2px] h-[41px] text-[15px] font-semibold', className),
        red: classNames('bg-danger-100 hover:bg-danger-200 rounded-[2px] h-[41px] text-base font-semibold', className),
    }

    return (
        <button className={btnClass[color]}>
            { children }
        </button>
    )
}