from graphviz import Digraph

# Create the activity diagram
dot = Digraph("Echo_Activity_Diagram", format="png")
dot.attr(rankdir="TB", size="10")

# Patient swimlane
with dot.subgraph(name="cluster_patient") as p:
    p.attr(label="Patient Dashboard", style="filled", color="lightblue", fontname="Arial")
    p.node("PStart", "Start", shape="circle")
    p.node("AuthP", "Authentication\n(Sign up / Log in / Log out)", shape="box")
    p.node("Profile", "Manage Profile\n(Add urgency number, info)", shape="box")
    p.node("AppointmentsP", "Appointments Management\n(Make/Reschedule/Cancel/Reminders/Telehealth)", shape="box")
    p.node("Medication", "Medication Management\n(Add/Edit/Remove/Reminders/Analytics)", shape="box")
    p.node("Chatbot", "AI Chatbot Interaction\n(Questions, Diet, Lab results, Wellness)", shape="box")
    p.node("Reports", "Medical Analysis & Report Scanning\n(Upload, OCR, Alerts)", shape="box")
    p.node("Records", "Medical Dossier / Records\n(Lab, Appointments, Medications, Dashboards)", shape="box")
    p.node("PEnd", "End", shape="doublecircle")
    
    p.edges([("PStart","AuthP"), ("AuthP","Profile"), ("Profile","AppointmentsP"), 
             ("AppointmentsP","Medication"), ("Medication","Chatbot"),
             ("Chatbot","Reports"), ("Reports","Records"), ("Records","PEnd")])

# Collaborator swimlane
with dot.subgraph(name="cluster_collab") as c:
    c.attr(label="Collaborator Dashboard", style="filled", color="lightgreen", fontname="Arial")
    c.node("CStart", "Start", shape="circle")
    c.node("AuthC", "Authentication\n(Log in)", shape="box")
    c.node("AppointmentsC", "Appointments Management\n(View/Confirm/Decline/Filter)", shape="box")
    c.node("Client", "Client Management\n(View info, Access history/reports)", shape="box")
    c.node("CEnd", "End", shape="doublecircle")
    
    c.edges([("CStart","AuthC"), ("AuthC","AppointmentsC"), ("AppointmentsC","Client"), ("Client","CEnd")])

# Transversal system functions
dot.node("Notif", "Notifications\n(Medication & Appointments)", shape="parallelogram", color="orange")
dot.node("Security", "Secure Storage\n(Medical Data, Privacy)", shape="parallelogram", color="red")
dot.node("AI", "AI-powered Features\n(Chatbot, OCR)", shape="parallelogram", color="purple")
dot.node("APIs", "External APIs\n(Nutrition, OCR, KB)", shape="parallelogram", color="brown")
dot.node("Custom", "Optional: Dashboard Customization", shape="parallelogram", color="gray")

# Connect transversal nodes
dot.edge("AppointmentsP", "Notif", style="dashed")
dot.edge("Medication", "Notif", style="dashed")
dot.edge("AuthP", "Security", style="dashed")
dot.edge("AuthC", "Security", style="dashed")
dot.edge("Chatbot", "AI", style="dashed")
dot.edge("Reports", "AI", style="dashed")
dot.edge("Reports", "APIs", style="dashed")
dot.edge("Chatbot", "APIs", style="dashed")
dot.edge("AuthP", "Custom", style="dashed")
dot.edge("AuthC", "Custom", style="dashed")

# Render
output_path = "/mnt/data/Echo_Activity_Diagram"
dot.render(output_path, format="png", cleanup=True)
output_path + ".png"
