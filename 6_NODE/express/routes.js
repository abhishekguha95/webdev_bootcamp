const express = require('express')

const router = express.Router()

router.get("/", (req, res) => {
    res.render("home.ejs");
});

router.get("/random", (req, res) => {
	const num = Math.floor(Math.random() * 10);
	res.render("random", { num });
});

router.post("/test", (req, res) => {
	console.log(req.body);
	res.status(200).send(req.body);
});

///////////////////////////////////////////////////////////////////////////
const fakeComments = [
    {
        id: "8fef7f3c-d0b7-4c3f-9a29-d0d6f7c0f8e8",
        user: "John Doe",
        text: "Hello, how are you today?",
    },
    {
        id: "2fec20b2-c5b9-48f5-9b5f-f5f5f1b6e7e6",
        user: "Jane Smith",
        text: "I'm good, thanks for asking!",
    },
    {
        id: "f5cc5f6a-8b00-4f44-9f98-14c1a9b3d4c4",
        user: "Bob Johnson",
        text: "Just finished a project, feeling accomplished!",
    },
    {
        id: "7a8b8c3e-a3c2-4f7e-9c8d-7d6b5f6e7f8g",
        user: "Emily Davis",
        text: "Headed to the gym, need to work off some stress.",
    },
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        user: "Michael Brown",
        text: "Watching the game, go team!",
    },
    {
        id: "9z8y7x6w-5v4u-3t2s-1r0q-p0o9n8m7l6k",
        user: "Sarah Miller",
        text: "Just finished a book, it was great!",
    },
    {
        id: "gf5e4d3c-2b1a-09f8-7e6d-5c4b3a2e1d0c",
        user: "David Garcia",
        text: "Headed to a meeting, wish me luck!",
    },
    {
        id: "aa11bb22-cc33-dd44-ee55-ff66-0077-8899",
        user: "Jessica Perez",
        text: "Off to work, another day another dollar!",
    },
    {
        id: "12345678-abcd-efgh-ijkl-mnop-qrst-uvwx",
        user: "Samantha Wilson",
        text: "Just got back from vacation, feeling refreshed!",
    },
    {
        id: "09876543-21fe-dcba-09fe-dcba-09fe-dcba",
        user: "Ashley Moore",
        text: "Making dinner, anyone want to join?",
    },
];
/////////////////////////////////////////////////////////////////////////////
router.get("/comments", (req, res) => {
	res.render("comments", { fakeComments });
});

router.get("/comment/new", (req, res) => {
	res.render("newCommentForm");
});

router.post("/comment/new", (req, res) => {
	const { user, comment } = req.body;
	console.log(user, comment);
	const newId = uuidv4();
	fakeComments.push({ id: newId, user, text: comment });
	res.redirect("/comments");
});

router.get("/comment/:id", (req, res) => {
	const commentId = req.params.id;
	const foundComment = fakeComments.find(
		(comment) => comment.id === commentId
	);
	console.log("foundComment: ", foundComment);
	res.render("singleComment", { foundComment });
});

router.get("/comment/:id/edit", (req, res) => {
	const commentId = req.params.id;
	const foundComment = fakeComments.find(
		(comment) => comment.id === commentId
	);
	res.render("editComment", { foundComment });
});

router.post("/comment/:id/edit", (req, res) => {
	const newCommentText = req.body.commentText;
	console.log("newCommentText: ", newCommentText);
	const commentId = req.params.id;
	const foundComment = fakeComments.find(
		(comment) => comment.id === commentId
	);
	foundComment.text = newCommentText;
	console.log("foundComment with edited: ", foundComment);
	res.render("singleComment", { foundComment });
});

router.get("*", (req, res) => {
	res.send("default");
});

module.exports = router