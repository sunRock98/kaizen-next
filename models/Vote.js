import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const voteSchema = new Schema({


    todayState: {
        type: String

    },

    proposal: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },

    kaidzenArea: {
        type: Array

    },

    author: {
        type: String,
        required: true
    },
    uploads: {
        type: Array
    },
    status: {
        type: String,
        default: 'new'
    },

    voteResults: {
        type: {
            userId: {
                type: {
                    vote: { type: Boolean },
                    comment: { type: String },
                    date: { type: Date, default: Date.now}

                }
            }
        }
    }
})

module.exports = mongoose.model('posts', postSchema)
export default mongoose.models.Votes || mongoose.model("Votes", voteSchema);