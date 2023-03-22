import Axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export const getAll = async (req, res) => {
    try {
        const { data: products } = await Axios.get(`${process.env.API_URI}`);

        if (products.length === 0) {
            res.status(404).json({
                message: 'Không có sản phẩm nào',
            });
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const getId = async (req, res) => {
    try {
        const { data: products } = await Axios.get(`${process.env.API_URI}/${req.params.id}`);

        if (!products) {
            res.status(404).json({
                message: 'không có',
            });
        }
        return res.status(200).json({
            message: 'Đã tìm thấy người dùng',
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const create = async (req, res) => {
    try {
        const { data: product } = await Axios.post(`${process.env.API_URI}`, req.body);
        if (!product) {
            return res.status(400).json({
                message: 'Không thể thêm người dùng',
            });
        }
        return res.status(201).json({
            message: 'Thêm người dùng thành công',
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const remove = async (req, res) => {
    try {
        await Axios.delete(`${process.env.API_URI}/${req.params.id}`);
        return res.status(200).json({
            message: 'Người dùng đã được xóa thành công',
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const update = async (req, res) => {
    try {
        const { data: product } = await Axios.patch(`${process.env.API_URI}/${req.params.id}`, req.body);
        if (!product) {
            return res.status(404).json({
                message: 'Không tìm thấy người dùng',
            });
        }
        return res.status(200).json({
            message: 'đã cập nhật thành công',
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};

export const put = async (req, res) => {
    try {
        const { data: product } = await Axios.put(`${process.env.API_URI}/${req.params.id}`, req.body);
        // console.log(data);
        if (!product) {
            return res.status(404).json({
                message: 'Không tìm thấy người dùng',
            });
        }
        return res.status(200).json({
            message: 'người dùng đã được cập nhật thành công',
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            message: error,
        });
    }
};
