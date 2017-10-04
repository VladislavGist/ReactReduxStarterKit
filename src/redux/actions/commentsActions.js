import {GET_COMMENTS} from "../constants/commentsConstants"

export const getComments = id => {
	return {
		type: GET_COMMENTS,
		id: id,
		getComments: `/api/comment?article=${id}`
	}
}