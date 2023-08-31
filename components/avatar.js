export default function Avatar({size}) {
    let width='w-10';
    if(size==='lg'){
        width='w-36';
    }
    return (
        <div className="p-2">
            <img className={`${width} rounded-full overflow-hidden`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsH_xryiDCFFMXuBIyU2zWqnd_eqsQcaDLFyoU3FmGDVrN5NmyusWO6kL2Eky2dQ66kLc&usqp=CAU" alt="" />
        </div>
    )
};