from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

RESUME_DATA = {
    "personal": {
        "name": "ANSS RASOOL",
        "contact": "+92-321-0417417",
        "email": "rasoolanss441@gmail.com",
        "location": "Lahore, Pakistan",
        "github": "anss-rasool32",
        "linkedin": "Anss Rasool"
    },
    "summary": "Junior Software Developer with hands-on experience in QA testing, integrations, API documentation, and Chrome extension support. Strong track record delivering integration pipelines (Zapier, Make, n8n), improving product reliability through triage and bug fixes, and producing clear end-user and developer documentation. Comfortable working with analytics tools like PostHog & Intercom to ship features and resolve production issues.",
    "skills": {
        "programming": ["Python", "C++", "C#", "Node.js", "SQL", "JavaScript"],
        "frameworks": ["HTML", "CSS", "Flask", "MySQL", "MongoDB", "Rest APIs"],
        "tools": ["Git", "GitHub", "Zapier", "n8n", "Intercom", "Posthog"]
    },
    "experience": [
        {
            "title": "Jr. Fullstack Developer",
            "company": "Ertiqah LLC.",
            "dates": "July 2025 - Present",
            "highlights": [
                "Conducted end-to-end Quality Assurance (QA) across web application, mobile views, and Chrome extension, identifying UI, UX, functional, and logic bugs prior to and after releases to ensure production stability.",
                "Improved API reliability & developer experience by creating & standardizing public API routes.",
                "Owned integration workstreams: built, tested, and launched connectors for Zapier, Make, Pabbly, and n8n; created example workflows and landing page content to support launches.",
                "Implemented and maintained product analytics and monitoring using PostHog (properties, surveys, weekly reports), enabling better detection of onboarding and feature usage issues.",
                "Contributed to a desktop app's major feature work (storage/manifest standardization, transcription pipeline & visualization, UI and recordings list, push-to-talk implementation).",
                "Extensively produced and updated Intercom help center articles (integration guides, publish/schedule posts, bulk import, post labels), changelogs, and a product documentation page to support both technical and non-technical users."
            ]
        }
    ],
    "education": [
        {
            "institution": "University of Management & Technology",
            "dates": "2023 - Present",
            "degree": "BSCS Computer Science"
        }
    ]
}

@app.route('/api/resume', methods=['GET'])
def get_resume():
    return jsonify(RESUME_DATA)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
