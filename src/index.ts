import express from "express";

export const app = express();

app.get("/", (req, res) => {
    res.json({ message: "OK" });
});

app.get("/users", (req, res) => {
    const users = [
        {
            id: 1,
            name: "David Alen"
        },
        {
            id: 2,
            name: "Pedro Hameister"
        }
    ];
    res.send({ data: users });
});

export const server = app.listen(3000);
