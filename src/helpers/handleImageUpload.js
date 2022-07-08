import { toast } from 'react-toastify';

export default async (e, toggleFunc, cb) => {
  toggleFunc?.();
  const selectedFile = e.target.files[0];
  const fileType = ['image/'];
  try {
    if (selectedFile && selectedFile.type.includes(fileType)) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async (e) => {
        //console.log(`result onLoadEnd`, e.target.result);
        const file = e.target.result;

        cb(file);
        toggleFunc?.();
      };
    } else {
      toast.error(`Only ${fileType.join()} formats are acceptable !`);
    }
  } catch (err) {
    toast(
      err?.response?.data?.message || err.message || 'Something Went Wrong'
    );
    console.log(`err`, err);
  }
};
