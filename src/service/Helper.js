class Helper {
    static normalize(type) {
        type = type.replace("_", " ");
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
}

export default Helper