import CategoryCard from "../../../Components/CategoryCard/CategoryCard";
import Category1 from "../../../assets/Category1.webp";
import Category2 from "../../../assets/Category2.webp";

const Category = () => {
    return (
        <div className="mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[2px]">
                <CategoryCard CategoryImage={Category1} />
                <CategoryCard CategoryImage={Category2} />
                <CategoryCard CategoryImage={Category1} />
                <CategoryCard CategoryImage={Category2} />
            </div>
        </div>
    );
};

export default Category;