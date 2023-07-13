

const CategoryForm = ({ handleSubmit, value, setValue ,btnLabel}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
       
          <input
            type="text"
            className="w-full bg-green-50 text-center h-10 border-2  border-gray-300 hover:bg-white font-bold focus:border-bg-gray-100 focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
      

      <button className='w-full my-2 py-2 text-xl bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'type='submit'>{btnLabel}</button>
      </form>
    </>
  );
};

export default CategoryForm;