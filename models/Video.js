import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true,
    },
    videoUrl: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    },
    likes: {
        type: [String],
        default: []
    },
    dislikes: {
        type: [String],
        default: []
    },
    imgPfp: {
        type: String,
        default: 'https://res.cloudinary.com/dh01ngdjo/image/upload/v1705174974/trick-treat3-img_f7txg5.png'
    },
    nameChannel: {
        type: String,
        default: 'Pixelguy'
    }


}, { timestamps: true })

export default mongoose.model('Video', VideoSchema)