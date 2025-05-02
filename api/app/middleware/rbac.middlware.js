const isAdmin = (req, res, next) => {
    let role = req.auth_user.role;
    if(role.includes('admin')) {
        next();
    } else {
        next({
            status: 403,
            msg: "Unauthorized"
        })
    }
}

const isEditor = (req, res, next) => {
    let role = req.auth_user.role;
    if(role.includes('editor')) {
        next();
    } else {
        next({
            status: 403,
            msg: "Unauthorized"
        })
    }
}


const isAdminEditor = (req,res,next) => {
    let role = req.auth_user.role;
    if(role.includes('admin') || role.includes('editor')){
        next();
    } else {
        next({
            status: 403,
            msg: "Unauthorized"
        })
    }
}

module.exports = {
    isAdmin,
    isEditor,
    isAdminEditor
}