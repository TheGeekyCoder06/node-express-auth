const isAdmin = (req, res, next) => {
    if (req.userInfo && req.userInfo.role === 'admin') {
        next();
    } else {
       return res.status(403).json(
        { message: 'Access denied. Admins only.' },
        { success: false }
    );
    }
};

export default isAdmin;
