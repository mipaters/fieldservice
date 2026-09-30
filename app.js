const icon = (name, className = "") => {
  const paths = {
    satellite: '<path d="m13.5 6.5-3.15-3.15a1.2 1.2 0 0 0-1.7 0L6.35 5.65a1.2 1.2 0 0 0 0 1.7L9.5 10.5m7-3 2.5-2.5m-1.5 5.5 3.15 3.15a1.2 1.2 0 0 1 0 1.7l-2.3 2.3a1.2 1.2 0 0 1-1.7 0L13.5 14.5M9 21a6 6 0 0 0-6-6m6.35-4.35a1.2 1.2 0 0 0 0 1.7l2.3 2.3a1.2 1.2 0 0 0 1.7 0l4.3-4.3a1.2 1.2 0 0 0 0-1.7l-2.3-2.3a1.2 1.2 0 0 0-1.7 0z"/>',
    radio: '<path d="M16.25 7.76a6 6 0 0 1 0 8.48M19.08 4.93a10 10 0 0 1 0 14.14M4.92 19.07a10 10 0 0 1 0-14.14m2.83 11.3a6 6 0 0 1 0-8.48"/><circle cx="12" cy="12" r="2"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m6 0h4a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m14-17.87a4 4 0 0 1 0 7.74M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/>',
    play: '<path d="M5 5a2 2 0 0 1 3-1.73l12 7a2 2 0 0 1 0 3.46l-12 7A2 2 0 0 1 5 19z"/>',
    pause: '<rect x="14" y="3" width="5" height="18" rx="1"/><rect x="5" y="3" width="5" height="18" rx="1"/>',
    reset: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    arrowRight: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7m7 7H5"/>',
    person: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    plug: '<path d="M12 22v-5m3-9V2M9 8V2m8 6H7v5a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4z"/>',
    sparkles: '<path d="M11 3a1 1 0 0 1 2 0l1.1 5.6a2 2 0 0 0 1.6 1.6l5.5 1.1a1 1 0 0 1 0 2l-5.5 1.1a2 2 0 0 0-1.6 1.6L13 21.2a1 1 0 0 1-2 0l-1.1-5.6a2 2 0 0 0-1.6-1.6L2.8 13a1 1 0 0 1 0-2l5.5-1.1a2 2 0 0 0 1.6-1.6z"/>'
  };
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.sparkles}</svg>`;
};

const metrics = [
  ["radio", "12", "Active outages"],
  ["truck", "148", "Trucks in field"],
  ["users", "1,204", "Techs assisted today"],
  ["satellite", "37,910", "Autonomous actions"]
];

const outcomes = [
  { label: "First time fix rate", value: "72% → 89%", detail: "+17 points", drivers: ["Contextual guidance", "Historical resolutions", "Visual diagnostics", "Network intelligence"] },
  { label: "Mean time to repair", value: "-35 to 50%", detail: "Faster restoration", drivers: ["Agent-assisted troubleshooting", "Automated diagnostics", "Dynamic dispatching", "Automated escalation"] },
  { label: "Technician productivity", value: "+20 to 35%", detail: "More jobs per day", drivers: ["No admin overhead", "No manual documentation", "No knowledge searches", "No scheduling friction"] },
  { label: "Truck rolls", value: "-10 to 25%", detail: "Fewer dispatches", drivers: ["Remote diagnostics", "Automated issue identification", "Better routing", "Better inventory planning"] },
  { label: "Customer satisfaction", value: "+15 to 30 pts", detail: "CSAT lift", drivers: ["Proactive updates", "Shorter resolution times", "Better first-time fixes"] }
];

const guideStops = [
  { minute: "00:00", title: "Frame the cost problem", say: "Field service is one of the largest controllable cost pools in the business — trucks, contractors, repeat visits — and most of that spend goes to coordination, not repair.", show: "Open on the hero and the live operations counters.", proof: ["148 trucks in field", "12 active outages", "37,910 autonomous actions"] },
  { minute: "02:00", title: "Anchor on the business case", say: "Every number here maps to a metric you already report to the board — first-time fix, MTTR, truck rolls, CSAT.", show: "Scroll to Business outcomes and read the drivers under two tiles.", proof: ["First time fix 72% → 89%", "MTTR down 35–50%", "Truck rolls down 10–25%"] },
  { minute: "05:00", title: "Run the fiber outage scenario", say: "Watch a single customer report move through seven agents with no swivel-chair between Netcracker, ServiceNow and Dynamics.", show: "Press run on the Fiber outage repair scenario and narrate each handoff.", proof: ["Network Intelligence reads Netcracker + Nokia NSP", "Copilot runs in Dynamics 365 Field Service", "Closure writes back to ServiceNow"] },
  { minute: "09:00", title: "Show the agent framework", say: "This is not one chatbot. Eight specialized agents each own a domain and share the same context.", show: "Walk the agent grid and open the Uses row on Inventory and Closure.", proof: ["SAP S/4HANA and Oracle SCM for parts", "Salesforce and Amdocs for the customer", "Azure AI Vision for repair validation"] },
  { minute: "12:00", title: "Prove the storm scenario at scale", say: "The same orchestration absorbs a mass event without adding dispatchers.", show: "Run the Storm recovery scenario and stop on the leadership dashboard step.", proof: ["Incidents clustered and prioritized", "Workforce rebalanced into repair zones", "Customer ETAs pushed automatically"] },
  { minute: "15:00", title: "Land the architecture and next step", say: "Nothing here asks you to replace your stack — the agents sit above Netcracker, Amdocs, Oracle, Salesforce, ServiceNow and Dynamics.", show: "Finish on the architecture layers and the executive soundbite.", proof: ["Copilot Studio + Azure AI orchestration", "Fabric and OneLake as the data spine", "Existing OSS/BSS systems of record unchanged"] }
];

const agents = [
  { name: "Dispatch Agent", tasks: ["Route optimization", "Technician assignment", "SLA management", "Dynamic rescheduling"], label: "Uses", tools: ["Maps", "Traffic", "Skills matching", "Job prioritization"] },
  { name: "Technician Copilot Agent", tasks: ["Work order summaries", "Troubleshooting guidance", "Natural language support", "Resolution recommendations"], label: "Uses", tools: ["Dynamics 365 Field Service Copilot"] },
  { name: "Network Intelligence Agent", tasks: ["Analyze network alarms", "Review telemetry", "Detect root cause", "Predict likely failures"], label: "Data sources", tools: ["Netcracker OSS", "Amdocs BSS", "Nokia NSP", "Ciena Blue Planet", "Splunk event streams"] },
  { name: "Visual Inspection Agent", tasks: ["Analyze images", "Validate installations", "Detect equipment faults", "Verify repair quality"], label: "Uses", tools: ["GPT Vision", "Azure AI Vision"] },
  { name: "Inventory Agent", tasks: ["Check truck stock", "Locate replacement parts", "Reserve inventory", "Initiate replenishment"], label: "Uses", tools: ["SAP S/4HANA", "Oracle SCM", "Dynamics 365 Field Service inventory"] },
  { name: "Safety Agent", tasks: ["Assess risk", "Validate procedures", "Monitor compliance", "Deliver safety guidance"], label: "Uses", tools: ["Procedure library", "Compliance policies"] },
  { name: "Customer Engagement Agent", tasks: ["Proactive outreach", "ETA notifications", "Appointment updates", "Service communication"], label: "Uses", tools: ["Salesforce Service Cloud", "Dynamics 365 Customer Service", "Amdocs CES"] },
  { name: "Closure Agent", tasks: ["Generate service reports", "Update CRM", "Update billing", "Close work orders", "Trigger surveys"], label: "Uses", tools: ["Dynamics 365 Field Service", "ServiceNow CSM", "Amdocs billing", "Salesforce"] }
];

const flowSteps = [
  "Customer reports outage",
  "Customer Engagement Agent creates case",
  "Network Intelligence Agent identifies likely root cause",
  "Dispatch Agent assigns best technician",
  "Inventory Agent verifies parts availability",
  "Technician Copilot briefs technician",
  "Visual Inspection Agent validates repair",
  "Closure Agent updates systems",
  "Customer Engagement Agent confirms resolution"
];

const architecture = [
  { layer: "Experience layer", items: ["AgentField 360 front end", "Microsoft Teams", "Mobile technician experience"] },
  { layer: "Agent layer", items: ["Microsoft Copilot Studio", "Azure AI Agents", "Azure OpenAI"] },
  { layer: "Data layer", items: ["Microsoft Fabric", "OneLake", "Data Activator"] },
  { layer: "OSS / network sources", items: ["Netcracker OSS", "Nokia NSP", "Ciena Blue Planet", "Cisco Crosswork", "Esri ArcGIS", "Network telemetry"] },
  { layer: "BSS / customer sources", items: ["Amdocs CES", "Oracle BRM", "Salesforce Service Cloud", "Dynamics 365 Customer Service", "Work orders"] },
  { layer: "Operational systems", items: ["Dynamics 365 Field Service", "ServiceNow CSM & FSM", "SAP S/4HANA", "Oracle SCM", "Salesforce Field Service"] },
  { layer: "AI services", items: ["Azure OpenAI", "Azure AI Search", "Azure AI Vision", "Azure Maps"] }
];

const walkthrough = [
  { title: "Field service is a coordination problem", detail: "Operators spend billions on truck rolls, installs, dispatch operations, contractor management and repeat visits. Most of that spend coordinates people — it does not repair networks.", href: "#shift" },
  { title: "AgentField 360 is an orchestration layer", detail: "The Autonomous Workforce Operations Platform sits above existing CRM, field service, workforce management, inventory and network operations systems — coordinating Netcracker, Amdocs, ServiceNow, Dynamics 365, Salesforce, SAP and Oracle rather than replacing them.", href: "#shift" },
  { title: "Specialized agents own each domain", detail: "Eight agents — Dispatch, Technician Copilot, Network Intelligence, Visual Inspection, Inventory, Safety, Customer Engagement and Closure — share one context and escalate only when a human adds value.", href: "#agents" },
  { title: "Answers find the technician", detail: "Instead of technicians searching documentation and calling supervisors, agents deliver context, diagnostics and recommended repairs the moment a job starts. People focus on customers, not systems.", href: "#shift" },
  { title: "One orchestrated workflow across systems", detail: "A single customer report moves through seven agents with no swivel-chair between Netcracker, ServiceNow and Dynamics 365 Field Service. Closure writes back to every downstream system automatically.", href: "#scenarios" },
  { title: "Business outcomes in the first year", detail: "First-time fix 72% → 89%, mean time to repair down 35–50%, truck rolls down 10–25% and CSAT up 15–30 points — every number maps to a metric you already report to the board.", href: "#outcomes" },
  { title: "Scales through mass events", detail: "The same orchestration absorbs a storm with multiple simultaneous outages — clustering incidents, rebalancing the workforce into repair zones and pushing customer ETAs — without adding dispatchers.", href: "#scenarios" },
  { title: "Built on the stack operators already run", detail: "Microsoft Copilot Studio, Azure AI Agents and Fabric form the agent and data spine, sitting above your OSS/BSS systems of record. Nothing here asks you to replace your stack.", href: "#architecture" }
];

const scenarios = [
  {
    id: "install", title: "New fiber install", user: "Residential customer", objective: "Install fiber broadband service",
    steps: [
      { actor: "Customer", text: "Submits a fiber service order online.", human: "The customer simply places an order on the web portal — no phone call, no forms to repeat.", systems: ["Salesforce Service Cloud"] },
      { actor: "Customer Engagement Agent", text: "Receives the request, opens the install journey and confirms the order with the customer.", bullets: ["Creates a service case", "Confirms order details"], systems: ["Salesforce Service Cloud", "Amdocs CES"] },
      { actor: "Serviceability Agent", text: "Verifies that fiber service is available at the customer's address.", bullets: ["Checks network coverage", "Confirms install eligibility"], systems: ["Netcracker OSS", "Esri ArcGIS"] },
      { actor: "Inventory Agent", text: "Reserves an ONT, router and installation materials for the job.", bullets: ["Checks local stock", "Reserves required equipment"], systems: ["SAP S/4HANA", "Oracle SCM"] },
      { actor: "Scheduling Agent", text: "Identifies the best appointment window based on customer preference and technician availability.", bullets: ["Matches skills and capacity", "Offers appointment windows"], systems: ["Dynamics 365 Field Service"] },
      { actor: "Dispatch Agent", text: "Assigns the technician and optimizes the route to the installation.", bullets: ["Prioritizes the SLA", "Optimizes travel time"], systems: ["Dynamics 365 Field Service", "Azure Maps"] },
      { actor: "Technician Copilot", text: "Prepares the installation plan, site brief and equipment list before the visit.", bullets: ["Surfaces address context", "Prepares the technician"], systems: ["Dynamics 365 Field Service"] },
      { actor: "Activation Agent", text: "Validates the new connection and confirms broadband service is live.", bullets: ["Checks signal levels", "Confirms activation"], systems: ["Netcracker OSS", "Nokia NSP"] },
      { actor: "Customer Engagement Agent", text: "Sends confirmation and onboarding information to the customer.", bullets: ["Confirms the completed install", "Shares next steps"], systems: ["Salesforce Service Cloud", "Amdocs CES"] }
    ]
  },
  {
    id: "outage", title: "Fiber outage repair", user: "Residential customer", objective: "Restore a neighborhood fiber outage",
    steps: [
      { actor: "Customer", text: "Reports a loss of broadband service through the customer portal.", human: "The customer reports the issue once; the case follows them through resolution.", systems: ["Salesforce Service Cloud"] },
      { actor: "Customer Engagement Agent", text: "Creates a case, checks for related reports and acknowledges the service disruption.", bullets: ["Opens a service case", "Looks for nearby reports"], systems: ["Salesforce Service Cloud", "ServiceNow CSM"] },
      { actor: "Network Intelligence Agent", text: "Correlates customer reports with live alarms and identifies a likely fiber cut.", bullets: ["Correlates alarms", "Scopes affected customers"], systems: ["Netcracker OSS", "Nokia NSP"] },
      { actor: "Dispatch Agent", text: "Selects a qualified technician near the affected network segment and assigns the repair.", bullets: ["Matches skills and location", "Protects the restoration SLA"], systems: ["Dynamics 365 Field Service", "Azure Maps"] },
      { actor: "Inventory Agent", text: "Verifies that the assigned truck has the splice enclosure and repair materials.", bullets: ["Checks truck stock", "Finds nearby replacement parts"], systems: ["SAP S/4HANA", "Oracle SCM"] },
      { actor: "Technician Copilot", text: "Briefs the technician with the alarm timeline, affected topology and recommended repair procedure.", bullets: ["Provides site context", "Surfaces similar resolutions"], systems: ["Dynamics 365 Field Service", "Azure AI Search"] },
      { actor: "Visual Inspection Agent", text: "Reviews repair photos and confirms the splice and cabinet are restored to standard.", bullets: ["Inspects submitted images", "Validates repair quality"], systems: ["Azure AI Vision", "Dynamics 365 Field Service"] },
      { actor: "Closure Agent", text: "Closes the work order and synchronizes the restoration details with service systems.", bullets: ["Documents work performed", "Updates downstream records"], systems: ["ServiceNow CSM", "Dynamics 365 Field Service"] },
      { actor: "Customer Engagement Agent", text: "Confirms that service is restored and sends the customer a resolution update.", bullets: ["Closes the communication loop", "Invites customer feedback"], systems: ["Salesforce Service Cloud", "Amdocs CES"] }
    ]
  },
  {
    id: "storm", title: "Storm recovery event", user: "Regional operations leader", objective: "Restore service across a storm-affected region",
    steps: [
      { actor: "Network", text: "Severe weather creates multiple alarms and customer-impacting outages across the region.", systems: ["Network telemetry", "Netcracker OSS"] },
      { actor: "Network Intelligence Agent", text: "Clusters related alarms into outage zones and estimates customer impact.", bullets: ["Groups correlated incidents", "Prioritizes critical sites"], systems: ["Netcracker OSS", "Nokia NSP"] },
      { actor: "Customer Engagement Agent", text: "Notifies affected customers and shares an initial restoration update.", bullets: ["Identifies impacted accounts", "Sends proactive notices"], systems: ["Amdocs CES", "Salesforce Service Cloud"] },
      { actor: "Dispatch Agent", text: "Rebalances available crews into repair zones based on skills, access and incident priority.", bullets: ["Maps repair zones", "Reassigns available crews"], systems: ["Dynamics 365 Field Service", "Azure Maps"] },
      { actor: "Safety Agent", text: "Surfaces weather, access and electrical hazards before crews enter each work area.", bullets: ["Assesses site conditions", "Shares required procedures"], systems: ["Safety procedures", "Weather feeds"] },
      { actor: "Inventory Agent", text: "Positions high-demand repair materials near the most critical outage clusters.", bullets: ["Checks regional stock", "Plans replenishment"], systems: ["SAP S/4HANA", "Oracle SCM"] },
      { actor: "Technician Copilot", text: "Delivers each crew a prioritized job brief with network context and safe-work guidance.", bullets: ["Prepares crews for dispatch", "Keeps context with the job"], systems: ["Dynamics 365 Field Service"] },
      { actor: "Customer Engagement Agent", text: "Pushes updated restoration estimates as crews make progress across the region.", bullets: ["Refreshes customer ETAs", "Communicates service progress"], systems: ["Salesforce Service Cloud", "Amdocs CES"] },
      { actor: "Operations leadership", text: "Tracks restoration progress, workforce coverage and remaining customer impact in one view.", bullets: ["Monitors restored services", "Prioritizes remaining incidents"], systems: ["Microsoft Fabric", "OneLake"] }
    ]
  },
  {
    id: "rerouting", title: "Dynamic re-routing day", user: "Field dispatcher", objective: "Protect appointment SLAs as the day changes",
    steps: [
      { actor: "Operations", text: "A technician reports a delayed job while urgent repair work enters the schedule.", systems: ["Dynamics 365 Field Service"] },
      { actor: "Dispatch Agent", text: "Recalculates routes and flags appointments at risk of missing their service window.", bullets: ["Rechecks traffic and travel", "Protects urgent repair SLAs"], systems: ["Azure Maps", "Dynamics 365 Field Service"] },
      { actor: "Technician Copilot", text: "Summarizes the remaining work and technician skills available across the area.", bullets: ["Checks job requirements", "Reviews technician capacity"], systems: ["Dynamics 365 Field Service"] },
      { actor: "Dispatch Agent", text: "Reassigns the next best technician and updates the optimized route.", bullets: ["Matches skills and proximity", "Reduces avoidable travel"], systems: ["Dynamics 365 Field Service", "Azure Maps"] },
      { actor: "Inventory Agent", text: "Confirms the newly assigned technician carries the parts needed for the job.", bullets: ["Checks truck stock", "Avoids a parts-related revisit"], systems: ["SAP S/4HANA", "Oracle SCM"] },
      { actor: "Customer Engagement Agent", text: "Sends the customer a revised arrival window before the appointment is missed.", bullets: ["Updates the customer", "Shares a live ETA"], systems: ["Salesforce Service Cloud"] },
      { actor: "Technician", text: "Receives the updated route and a job brief with the new work order context.", bullets: ["Views the new sequence", "Arrives prepared"], systems: ["Dynamics 365 Field Service"] },
      { actor: "Closure Agent", text: "Records the completed work and dispatch decisions for operational reporting.", bullets: ["Closes completed work", "Captures schedule changes"], systems: ["Dynamics 365 Field Service", "Microsoft Fabric"] }
    ]
  }
];

const tags = (items) => `<div class="proof-pills">${items.map(item => `<span>${item}</span>`).join("")}</div>`;
const sectionHeading = (eyebrow, title, lead = "") => `<div class="section-heading"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${lead ? `<p class="lead">${lead}</p>` : ""}</div>`;
const brand = `<a class="brand" href="/"><span class="brand-mark">${icon("satellite")}</span><span>AgentField 360</span></a>`;
const footerHtml = `<footer class="site-footer"><div class="container">AgentField 360 — illustrative demo. Metrics shown are modelled targets, not measured results.</div></footer>`;

function header(isWalkthrough = false) {
  return `<header class="site-header"><div class="container header-inner">${brand}${isWalkthrough ? `<a class="button button-outline button-small header-action" href="/">Back to overview</a>` : `<nav class="main-nav" aria-label="Main navigation"><a href="/walkthrough/">Walkthrough</a><a href="#outcomes">Outcomes</a><a href="#scenarios">Scenarios</a><a href="#walkthrough-guide">Demo guide</a><a href="#agents">Agents</a><a href="#architecture">Architecture</a></nav><a class="button button-small header-action" href="/walkthrough/">Executive walkthrough</a>`}</div></header>`;
}

function renderScenario() {
  return `<div class="surface scenario-shell" id="scenario-app">
    <div class="scenario-tabs" role="tablist" aria-label="Demo scenarios"></div>
    <div class="scenario-meta"><div class="scenario-info">
      <div><p class="label">User</p><p data-scenario-user></p></div>
      <div><p class="label">Objective</p><p data-scenario-objective></p></div>
    </div><div class="scenario-controls">
      <button class="button button-small" data-action="toggle">${icon("play")}<span>Run scenario</span></button>
      <button class="button button-outline button-small" data-action="reset">${icon("reset")}<span>Reset</span></button>
    </div></div>
    <div class="progress-track" aria-label="Scenario progress"></div>
    <div class="step-strip" aria-label="Scenario steps"></div>
    <div class="step-detail" aria-live="polite"></div>
  </div>`;
}

function renderHome() {
  return `${header()}
    <main>
      <section class="hero">
        <img class="hero-image" src="https://fieldservice.patersonindustrydemos.com/assets/hero-field-wCg--E5M.jpg" alt="Field technician reviewing live fiber network diagnostics at a street cabinet">
        <div class="hero-shade"></div><div class="hero-grid"></div>
        <div class="container hero-content">
          <p class="hero-kicker">Autonomous field service platform</p>
          <h1>Instead of technicians searching for answers, <span class="text-signal">answers find the technician.</span></h1>
          <p class="hero-copy">AgentField 360 turns field service from a labor-intensive operation into an AI-powered service ecosystem, where agents continuously coordinate technicians, customers, dispatchers, inventory, network operations and work orders.</p>
          <div class="hero-actions"><a class="button" href="/walkthrough/">Start the executive walkthrough</a><a class="button button-outline" href="#outcomes">See the business case</a></div>
          <div class="metrics">${metrics.map(([symbol, value, label]) => `<div class="metric">${icon(symbol, "metric-icon")}<div><p class="metric-value">${value}</p><p class="metric-label">${label}</p></div></div>`).join("")}</div>
        </div>
      </section>

      <section class="section"><div class="container shift-grid">
        <div>${sectionHeading("The problem", "Billions spent coordinating people, not fixing networks", "Operators pay for truck rolls, installs, network repairs, dispatch operations, contractor management, inventory logistics and repeat service calls.")}
          <ul class="problem-list">${["Reviewing work orders", "Searching documentation", "Calling supervisors", "Finding parts", "Updating systems", "Coordinating repairs"].map(item => `<li>${item}</li>`).join("")}</ul>
        </div>
        <div class="surface shift-card">${sectionHeading("The shift", "Agents coordinate systems. People focus on customers.")}
          <div class="shift-list">${[["Dispatchers", "manually managing schedules", "agents dynamically orchestrate work"], ["Technicians", "hunting for answers", "answers arrive with context"], ["Customers", "waiting for updates", "proactive progress and outcomes"]].map(([role, oldState, newState]) => `<div class="shift-row"><p class="label">${role}</p><p class="old-state">${oldState}</p><p class="new-state">${newState}</p></div>`).join("")}</div>
        </div>
      </div></section>

      <section class="section section-band" id="outcomes"><div class="container">
        ${sectionHeading("Business outcomes", "What changes in the first year", "Modelled impact across the core field-service metrics operators already report on.")}
        <div class="outcomes-grid">${outcomes.map(item => `<article class="surface outcome-card"><p class="metric-label">${item.label}</p><p class="outcome-value text-signal">${item.value}</p><p class="outcome-caption">${item.detail}</p><ul class="driver-list">${item.drivers.map(text => `<li>${text}</li>`).join("")}</ul></article>`).join("")}</div>
      </div></section>

      <section class="section" id="walkthrough-guide"><div class="container">
        ${sectionHeading("Executive walkthrough", "How to run this demo in 18 minutes", "Six stops, what to say at each one, and the exact proof point on screen — built for a CxO audience.")}
        <div class="guide-grid">${guideStops.map((item, index) => `<article class="surface guide-card"><div class="guide-top"><span class="mono guide-time">${item.minute}</span><span class="mono guide-stop">Stop ${index + 1} of 6</span></div><h3>${item.title}</h3><p class="guide-quote">“${item.say}”</p><p class="guide-show"><strong>On screen — </strong>${item.show}</p><div class="guide-proof"><p class="proof-label">Point at</p>${tags(item.proof)}</div></article>`).join("")}</div>
      </div></section>

      <section class="section section-band" id="scenarios"><div class="container">
        ${sectionHeading("Live walkthroughs", "Four scenarios, one orchestrated workflow", "Press run and watch the agents hand off work with no swivel-chair operations.")}
        ${renderScenario()}
      </div></section>

      <section class="section" id="agents"><div class="container">
        ${sectionHeading("Autonomous agent framework", "Eight specialized agents", "Each agent owns a domain, shares context, and escalates only when a human adds value.")}
        <div class="agents-grid">${agents.map((agent, index) => `<article class="surface agent-card"><div class="agent-head"><span class="agent-number">${index + 1}</span><h3>${agent.name}</h3></div><ul>${agent.tasks.map(task => `<li>${task}</li>`).join("")}</ul><details class="agent-meta"><summary>${agent.label}</summary>${tags(agent.tools)}</details></article>`).join("")}</div>
      </div></section>

      <section class="section section-band"><div class="container">
        ${sectionHeading("Agent collaboration", "A fiber outage, end to end", "One customer report triggers a chain of autonomous handoffs that closes the loop back to the customer.")}
        <div class="surface flow-card"><ol class="flow-list">${flowSteps.map((step, index) => `<li><div class="flow-row"><span class="mono flow-number">${String(index + 1).padStart(2, "0")}</span><span>${step}</span></div>${index < flowSteps.length - 1 ? `<div class="flow-arrow">${icon("arrowRight")}</div>` : ""}</li>`).join("")}</ol><p class="flow-caption">The user experiences one seamless workflow while eight specialized agents coordinate autonomously behind the scenes.</p></div>
      </div></section>

      <section class="section" id="architecture"><div class="container">
        ${sectionHeading("Microsoft architecture", "Built on the stack operators already run", "Experience, agent orchestration, data and operational systems in one reference design.")}
        <div class="architecture-grid">${architecture.map(item => `<article class="surface architecture-card"><div class="architecture-accent"></div><h3>${item.layer}</h3><ul>${item.items.map(value => `<li>${value}</li>`).join("")}</ul></article>`).join("")}</div>
      </div></section>

      <section class="quote-section"><div class="container surface quote-box"><blockquote>“AgentField 360 transforms every field technician into a super-technician, every dispatcher into an AI orchestrator, and every service interaction into a proactive, autonomous experience.”</blockquote><div class="quote-perks"><span>Faster service restoration</span><span>Better customer experiences</span><span>Higher technician productivity</span><span>Lower operational costs</span><span>Autonomous operations</span></div></div></section>
    </main>${footerHtml}`;
}

function renderWalkthrough() {
  return `${header(true)}<main class="walkthrough-main"><div class="container">
    <div class="walkthrough-intro">${sectionHeading("Executive walkthrough", "The eight-step executive summary", "A guided narrative of what AgentField 360 is, the problem it solves, and how it orchestrates field service across the systems operators already run — without replacing them.")}</div>
    <div class="walkthrough-launch"><button class="button" id="walkthrough-toggle">${icon("play")}<span>Start the executive walkthrough</span></button></div>
    <p class="walkthrough-label">What you will see</p>
    <div class="walkthrough-grid">${walkthrough.map((step, index) => `<a class="walk-card" data-walk-step="${index}" href="/${step.href}"><span class="walk-number">${index + 1}</span><h3>${step.title}</h3><p>${step.detail}</p></a>`).join("")}</div>
    <div class="walk-progress" aria-label="Walkthrough progress"><span></span></div>
    <div class="walk-card-actions"><span class="text-muted" id="walkthrough-status">Ready when you are — eight stops, one clear story.</span><div class="right-actions"><button class="button button-outline" id="walkthrough-previous" disabled>${icon("arrowLeft")}Back</button><button class="button" id="walkthrough-next" disabled>Next stop${icon("arrowRight")}</button></div></div>
  </div></main>${footerHtml}`;
}

const app = document.querySelector("#app");
const isWalkthrough = app?.dataset.page === "walkthrough" || location.pathname.startsWith("/walkthrough");
app.innerHTML = isWalkthrough ? renderWalkthrough() : renderHome();

const scenarioRoot = document.querySelector("#scenario-app");
if (scenarioRoot) {
  let scenarioIndex = 0;
  let stepIndex = 0;
  let playing = false;
  let timer;

  const update = () => {
    const scenario = scenarios[scenarioIndex];
    const step = scenario.steps[stepIndex];
    scenarioRoot.querySelector(".scenario-tabs").innerHTML = scenarios.map((item, index) =>
      `<button class="scenario-tab${index === scenarioIndex ? " active" : ""}" role="tab" aria-selected="${index === scenarioIndex}" data-scenario="${index}">${item.title}</button>`
    ).join("");
    scenarioRoot.querySelector("[data-scenario-user]").textContent = scenario.user;
    scenarioRoot.querySelector("[data-scenario-objective]").textContent = scenario.objective;
    const toggle = scenarioRoot.querySelector('[data-action="toggle"]');
    toggle.innerHTML = `${icon(playing ? "pause" : "play")}<span>${playing ? "Pause" : "Run scenario"}</span>`;
    scenarioRoot.querySelector(".progress-track").innerHTML = scenario.steps.map((_, index) =>
      `<button class="progress-segment${index <= stepIndex ? " done" : ""}" aria-label="Go to step ${index + 1}" data-step="${index}"></button>`
    ).join("");
    scenarioRoot.querySelector(".step-strip").innerHTML = scenario.steps.map((item, index) =>
      `<button class="step-tile${index === stepIndex ? " active" : index < stepIndex ? " complete" : ""}" data-step="${index}"><span class="step-index">${index + 1}</span><p class="scenario-actor">${item.actor}</p><p class="step-summary">${item.text}</p></button>`
    ).join("");
    const extras = [
      step.human ? `<div class="step-extra">${icon("person", "extra-icon")}<span><strong>Human interaction — </strong>${step.human}</span></div>` : "",
      step.powered ? `<div class="step-extra">${icon("sparkles", "extra-icon")}<span><strong>Powered by — </strong>${step.powered.join(" · ")}</span></div>` : "",
      step.systems ? `<div class="step-extra">${icon("plug", "extra-icon")}<span><strong>Systems touched — </strong>${step.systems.join(" · ")}</span></div>` : ""
    ].filter(Boolean).join("");
    scenarioRoot.querySelector(".step-detail").innerHTML = `<h3>Step ${stepIndex + 1} of ${scenario.steps.length} — ${step.actor}</h3><p>${step.text}</p>${step.bullets ? `<ul class="step-bullets">${step.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>` : ""}${extras ? `<div class="step-extras">${extras}</div>` : ""}<div class="step-actions"><button class="button button-outline button-small" data-action="previous"${stepIndex === 0 ? " disabled" : ""}>${icon("arrowLeft")}Back</button>${stepIndex < scenario.steps.length - 1 ? `<button class="button button-small" data-action="next">Next step${icon("arrowRight")}</button>` : `<button class="button button-small" data-action="restart">${icon("reset")}Restart</button>`}</div>`;
  };

  const stopPlayback = () => {
    playing = false;
    window.clearInterval(timer);
    timer = undefined;
  };
  const setStep = (nextStep) => {
    const limit = scenarios[scenarioIndex].steps.length;
    stepIndex = Math.max(0, Math.min(limit - 1, nextStep));
    if (playing && stepIndex === limit - 1) stopPlayback();
    update();
  };
  const play = () => {
    if (playing) {
      stopPlayback();
    } else {
      if (stepIndex >= scenarios[scenarioIndex].steps.length - 1) stepIndex = 0;
      playing = true;
      timer = window.setInterval(() => {
        if (stepIndex >= scenarios[scenarioIndex].steps.length - 1) {
          stopPlayback();
          update();
          return;
        }
        stepIndex += 1;
        update();
      }, 2400);
    }
    update();
  };

  scenarioRoot.addEventListener("click", event => {
    const target = event.target.closest("button");
    if (!target) return;
    if (target.dataset.scenario !== undefined) {
      stopPlayback();
      scenarioIndex = Number(target.dataset.scenario);
      stepIndex = 0;
      update();
    } else if (target.dataset.step !== undefined) {
      stopPlayback();
      setStep(Number(target.dataset.step));
    } else if (target.dataset.action === "toggle") {
      play();
    } else if (target.dataset.action === "reset" || target.dataset.action === "restart") {
      stopPlayback();
      stepIndex = 0;
      update();
    } else if (target.dataset.action === "previous") {
      setStep(stepIndex - 1);
    } else if (target.dataset.action === "next") {
      setStep(stepIndex + 1);
    }
  });
  update();
}

const walkthroughToggle = document.querySelector("#walkthrough-toggle");
if (walkthroughToggle) {
  let current = -1;
  let playing = false;
  let timer;
  const cards = [...document.querySelectorAll(".walk-card")];
  const updateWalkthrough = () => {
    cards.forEach((card, index) => card.classList.toggle("active", index === current));
    document.querySelector(".walk-progress span").style.width = `${current < 0 ? 0 : ((current + 1) / cards.length) * 100}%`;
    document.querySelector("#walkthrough-status").textContent = current < 0
      ? "Ready when you are — eight stops, one clear story."
      : `Stop ${current + 1} of ${cards.length} — ${walkthrough[current].title}`;
    document.querySelector("#walkthrough-previous").disabled = current <= 0;
    document.querySelector("#walkthrough-next").disabled = current < 0;
    walkthroughToggle.innerHTML = `${icon(playing ? "pause" : current === cards.length - 1 ? "reset" : "play")}<span>${playing ? "Pause walkthrough" : current === cards.length - 1 ? "Start again" : current < 0 ? "Start the executive walkthrough" : "Resume walkthrough"}</span>`;
    document.querySelector("#walkthrough-next").innerHTML = `${current === cards.length - 1 ? "Finish" : "Next stop"}${icon("arrowRight")}`;
  };
  const advance = () => {
    if (current < cards.length - 1) current += 1;
    else {
      playing = false;
      window.clearInterval(timer);
    }
    updateWalkthrough();
  };
  walkthroughToggle.addEventListener("click", () => {
    if (playing) {
      playing = false;
      window.clearInterval(timer);
    } else {
      if (current >= cards.length - 1) current = -1;
      playing = true;
      advance();
      timer = window.setInterval(() => {
        if (current >= cards.length - 1) {
          playing = false;
          window.clearInterval(timer);
          updateWalkthrough();
        } else advance();
      }, 4500);
    }
    updateWalkthrough();
  });
  document.querySelector("#walkthrough-next").addEventListener("click", advance);
  document.querySelector("#walkthrough-previous").addEventListener("click", () => {
    playing = false;
    window.clearInterval(timer);
    current = Math.max(0, current - 1);
    updateWalkthrough();
  });
  cards.forEach((card, index) => card.addEventListener("click", event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    playing = false;
    window.clearInterval(timer);
    current = index;
    updateWalkthrough();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }));
  updateWalkthrough();
}
