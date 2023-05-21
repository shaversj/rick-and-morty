function Character({name, imgURL, origin}) {
    return (
        <>
            <div className={"w-[178px] h-[263px] border border-gray-300 drop-shadow-sm"}>
                <img className={""} src={imgURL} alt={""}/>
                <div className={"text-left pl-5 pt-2"}>
                    <h1 className={"text-[18.25px] font-medium"}>{name}</h1>
                    <p className={"text-[11px] pt-1.5"}>{origin}</p>
                </div>
            </div>

        </>
    );
}

export default Character;