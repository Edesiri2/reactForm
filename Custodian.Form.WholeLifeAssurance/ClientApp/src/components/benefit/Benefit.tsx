import { Formik } from "formik";
import { Title } from "../data/title.data";

const Benefit = () => {
  return (
    <div>
      <Formik initialValues={{ email: "" }} onSubmit={(values) => {}}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <div>
            <div className="flex flex-row gap-2 mb-4">
              <div className="w-full md:w-1/3 px-3 mb-4">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Title
                </label>
                <div className="relative">
                  <select
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                    name="title"
                    onChange={handleChange}
                    // defaultValue={values.title}
                  >
                    <option>--- select title ---</option>
                    {Title.map((item) => (
                      <option value={item.value}>{item.name}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  FirstName
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="John"
                  name="firstName"
                  onChange={handleChange}
                  // defaultValue={values.firstName}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Middle Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Benefit;
