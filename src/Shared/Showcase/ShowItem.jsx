

const ShowItem = ({item}) => {
    const {img} = item
    return (
        <div>
            <img className="rounded-xl h-60 w-[450px]" src={img} alt="" />
        </div>
    );
};

export default ShowItem;