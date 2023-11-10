import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mt-8 my-20 bg-cover">
            <div className="bg-black bg-opacity-50  py-8">
                <SectionTitle
                    subHeading="Check it out"
                    heading='Featured Item'
                ></SectionTitle>
            </div>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-black bg-opacity-50">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 10, 2023</p>
                    <p className="uppercase">Where can i get some ?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eius distinctio illum pariatur fugiat atque quo possimus accusantium exercitationem, maiores cumque molestiae voluptatibus, adipisci maxime itaque deleniti vel in ex delectus tenetur corrupti sequi nostrum fuga neque. Numquam quis, maxime quaerat quam explicabo vitae esse omnis. Aliquam nobis consequuntur consectetur.</p>

                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;