const BlockUnblockUser = require('../models/blockUnblockUsers.model')
const status = require("http-status");

exports.blockUnblockUsers = async (req, res) => {
    try {

        const block_user_id = req.body.block_user_id;
        const user_id = req.body.user_id;

        const existingBlock = await BlockUnblockUser.findOne({ user_id, block_user_id });

        if (req.body.blockStatus == 1) {

            if (!existingBlock) {

                const addblockUnblockUser = new BlockUnblockUser({
                    user_id: req.body.user_id,
                    block_user_id: req.body.block_user_id,
                    blockStatus: req.body.blockStatus,
                });
                const response = await addblockUnblockUser.save();

                res.status(status.CREATED).json(
                    {
                        message: "User Blocked",
                        status: true,
                        code: 201,
                        statusCode: 1,
                        data: response,
                    }
                );

            } else {

                res.status(status.CONFLICT).json(
                    {
                        message: "User already blocked",
                        status: false,
                        code: 409,
                        statusCode: 0,
                    }
                );

            }

        } else {

            if (existingBlock) {

                await BlockUnblockUser.deleteOne({ user_id, block_user_id });
                res.status(status.CREATED).json({
                    message: "User Unblocked",
                    status: true,
                    code: 201,
                    statusCode: 1,
                    data: [],
                });

            } else {

                res.status(status.NOT_FOUND).json(
                    {
                        message: "User not blocked",
                        status: false,
                        code: 404,
                        statusCode: 0,
                    }
                );

            }

        }

    } catch (error) {

        res.status(status.INTERNAL_SERVER_ERROR).json(
            {
                message: "Something Went Wrong",
                status: false,
                code: 500,
                statusCode: 0,
                error: error.message,
            }
        );

    }

};
