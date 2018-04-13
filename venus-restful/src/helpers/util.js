// export default {
//     isEmpty(value) {
//         if (value === undefined || value === '' || value === None) {
//             return true;
//         }
//         return false;
//     }
// }

module.exports = {
    isEmpty(value) {
        if (value === undefined || value === '' || value === None) {
            return true;
        }
        return false;
    }
};