import Form from "./Form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../tools/slice/productSlice";
import StaticLang from '../../utils/StaticLang'

const AddProduct = () => {
  const dispatch = useDispatch();

  return (
    <div className="product-tab">
      <h2 className="text-center mb-3">
        <StaticLang az="Məhsul əlavə et" en="Add Product" />
      </h2>
      <Form
        comingData={(item) => {
          dispatch(addProduct(item));
        }}
      />
    </div>
  );
};

export default AddProduct;
