export default function Button({ content, onClick }) {

    return (
        <button onClick={onClick}
            className="px-[30px] py-[10px] border-[2px] font-bold border-MainColor text-white  bg-MainColor rounded-[5px] transition duration-300 hover:text-MainColor hover:bg-transparent">
            {content}
        </button>
    )
}