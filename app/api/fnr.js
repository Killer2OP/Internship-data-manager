   export default function handler(req, res) {
    if (req.method === 'POST') {
        // Handle the POST request
        const { description } = req.body; // Adjust based on how you're handling the file
        // Here you would typically save the file and description to your database or storage
        res.status(200).json({ message: 'File received', description });
    } else if (req.method === 'GET') {
        // Handle the GET request to fetch submissions
        const submissions = JSON.parse(localStorage.getItem("fnrSubmissions") || "[]");
        res.status(200).json(submissions);
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}