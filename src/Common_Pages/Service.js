
class Service {

    // convertBase64 Used in Vaitor
    convertBase64 = (file) => {
        let type_arry = [
            "image/png",
            "image/jpeg",
            "image/gif",
            "image/jpg",
            "image/x-png",
            "image/pjpeg",
        ];
        let size = parseFloat(file.size / 1024).toFixed(2);
        let name = file.name;
        let type = file.type;

        console.log(
            "size",
            size,
            "type :-",
            type,
            size <= 200,
            type_arry.includes(type),
            size <= 200 && type_arry.includes(type)
        );

        if (size <= 200 && type_arry.includes(type)) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();

                fileReader.readAsDataURL(file);

                fileReader.onload = () => {
                    resolve({ status: true, file: fileReader.result, name: name });
                };

                fileReader.onerror = (error) => {
                    reject({ status: false, msg: error });
                };
            });
        } else {
            if (!type_arry.includes(type)) {
                return {
                    status: false,
                    msg: "File type is not allow"
                };
            } else {
                return { status: false, msg: "Size of image file should not exceed 200KB" };
            }
        }
    };

}

const instance = new Service();

export default instance;
