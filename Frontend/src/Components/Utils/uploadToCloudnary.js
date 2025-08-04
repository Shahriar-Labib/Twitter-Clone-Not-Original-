export const uploadToCloudnary = async(pics) => {
    if(pics)
    {
        const data = new FormData()
        data.append("file",pics)
        data.append("upload_preset","twitter_clone");
        data.append("cloud_name","dkdu3b8fi");

        try {
            const res = await fetch("https://api.cloudinary.com/v1_1/dkdu3b8fi/image/upload",{
                method:"post",
                body:data
            })

            if (!res.ok) {
                throw new Error(`Upload failed: ${res.status} ${res.statusText}`);
            }

            const fileData = await res.json();
            return fileData.url.toString();
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            throw error;
        }
    }
    else {
        console.log("error from upload function")
        throw new Error("No image provided");
    }
}