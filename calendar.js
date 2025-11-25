
export default function handler(req, res) {
  const events = [
    { time: "7:30 AM", event: "PPI m/m" },
    { time: "9:00 AM", event: "Michigan Sentiment" }
  ];
  res.status(200).json({ country: "US", events });
}
