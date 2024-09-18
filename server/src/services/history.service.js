// user1 -> is who has done the work 
// user2 -> is who have directly been impacted 
// message -> the text needed to be send 
// concerns -> it will decide by it self
// url -> on Click where it will go!

const createLog = (logType, orgId, user1, user2, message, commentId = "") => {
    
}

module.exports = {
    logNewUser: (orgId, user2, message) => createLog('NEW_USER_SIGN_UP', orgId, '', user2, message, ""),
    logTaskAssigned: (orgId, user1, user2, message) => createLog('TASK_ASSIGNED', orgId, user1, user2, message),
    logCommentAddedToTask: (orgId, user1, user2, message, commentId) => createLog('COMMENT_ADDED_ON_TASK', orgId, user1, user2, message, commentId),
    logRepliedOnComment: (orgId, user1, user2, message, commentId) => createLog('REPLIED_ON_A_COMMENT', orgId, user1, user2, message, commentId)
}