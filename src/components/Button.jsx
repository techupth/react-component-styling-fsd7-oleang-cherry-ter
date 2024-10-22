// Start coding here

export function Button( {type} ) {
    return (
        <div>
        {type === "primary" ? (<button className="text-white bg-[#074EE8] w-[171.19px] h-[50px]">Button</button>) : (<button className="text-white bg-[#07A4EB] w-[171.19px] h-[50px]">Button</button>) }
        </div>
    )
}
