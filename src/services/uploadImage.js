import axios from "../config/axios"
export const uploadImage = async image => {
  let url
  try {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "god9whu6")
    formData.append("api_key", "891639644467234")
    formData.append("cloud_name", "djr5oxius")
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/djr5oxius/image/upload",
      formData
    )
    url = res.data.url
  } catch (err) {
    console.log(err)
  }
  return url
}
