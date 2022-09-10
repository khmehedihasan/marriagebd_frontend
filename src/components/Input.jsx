
function Input({onChange, type, name, id, value, placeholder, label, checked}){
    return(
        <>
            <label className=" cursor-pointer" htmlFor={id}>{label}</label>
            <input onChange={(e)=> onChange(e)} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={value} checked={checked} type={type} name={name} id={id} placeholder={placeholder} />
        </>
    )
}

function Textarea({onChange, type, name, id, value, placeholder, label}){
    return(
        <>
            <label className=" cursor-pointer" htmlFor={id}>{label}</label>
            <textarea onChange={(e)=> onChange(e)} rows={5} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" value={value} type={type} name={name} id={id} placeholder={placeholder} />
        </>
    )
}

function Select({onChange, name, id, value, label, children}){
    return(
        <>
            <label className=" cursor-pointer" htmlFor={id}>{label}</label>
            <select onChange={onChange} value={value} className=" border border-red-600 rounded-sm outline-1 outline-blue-500 text-red-500 py-1 px-2" name={name} id={id}>{children}</select>
        </>
    )
}

function Option({value,children}){
    return(<option value={value} >{children}</option>);
}

function Button1({onClick, name}){
    return(<button onClick={onClick} className=" w-28 mt-2 px-3 py-1 rounded-sm bg-red-600 text-white border-2 border-transparent hover:border-red-600 hover:text-red-600 hover:bg-white ">{name}</button>)
}

function Button2({onClick, name}){
    return(<button onClick={onClick} className=" w-28 mt-2 px-3 py-1 rounded-sm bg-blue-900 text-white border-2 border-transparent hover:border-blue-900 hover:text-blue-900 hover:bg-white ">{name}</button>)
}

function Form({children, title}){
    return(
        <div className=" m-4 w-[320px] sm:w-[500px] md:w-[800px] bg-slate-100 shadow-lg p-4 sm:p-10  mx-auto flex flex-col gap-2">
            <h1 className=" text-center text-2xl font-bold"><span className=' text-red-600'>{title}</span></h1>
            {children}
        </div>
    )
}

function FormContainer({children}){
    return(<div className=" bg-p1 py-36">{children}</div>);
}

export { Input, Button1, Button2, Form, FormContainer, Select, Option, Textarea };