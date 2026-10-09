/* Dedicated service page renderer for the four newly added services. */
(function () {
  const pageData = {
    'flood-analysis': {
      title: 'Flood Analysis',
      category: 'RISK STUDY',
      image: '../assect/contact-river-dam.jpg',
      subtitle: 'Hydrological and site-based flood analysis to understand risk, drainage patterns and practical mitigation needs.',
      intro: 'Our flood analysis service brings together catchment behaviour, rainfall patterns, drainage paths and site levels to help organisations make safer water and infrastructure decisions.',
      detail: 'We translate field observations and available hydrological data into clear risk findings, planning inputs and mitigation recommendations for projects exposed to surface-water flooding.',
      benefits: ['Catchment and drainage understanding', 'Flood-risk inputs for site planning', 'Clear mitigation recommendations'],
      steps: ['Review rainfall, catchment and site data', 'Assess flow paths, levels and exposure', 'Prepare findings and practical mitigation guidance'],
      facts: ['Flood-risk screening', 'Drainage assessment', 'Mitigation planning']
    },
    'water-credit': {
      title: 'Water Credit',
      category: 'WATER STEWARDSHIP',
      image: '../assect/industry-commercial.jpg',
      subtitle: 'Water-credit support for measuring conservation outcomes and planning responsible water stewardship.',
      intro: 'Our water-credit support helps organisations understand the water value of conservation, recharge and efficiency projects in a transparent, measurable way.',
      detail: 'We help define a practical baseline, identify measurable interventions and organise supporting evidence so water-saving and replenishment outcomes can be communicated with confidence.',
      benefits: ['Water conservation baseline', 'Outcome-focused project planning', 'Evidence-led stewardship reporting'],
      steps: ['Map current use and water context', 'Identify conservation and recharge opportunities', 'Track outcomes and prepare supporting records'],
      facts: ['Water accounting', 'Conservation projects', 'Impact documentation']
    },
    'hydrology': {
      title: 'Hydrology',
      category: 'HYDROLOGY',
      image: '../assect/our-expertise-3d-diagram-exact.png',
      subtitle: 'Hydrological studies that connect rainfall, surface water, aquifers and site-level water availability.',
      intro: 'Our hydrology services provide a connected view of how water moves through a landscape, from rainfall and runoff to recharge, storage and groundwater availability.',
      detail: 'This understanding supports water-supply planning, recharge design, environmental studies and responsible development decisions across rural, industrial and infrastructure sites.',
      benefits: ['Surface-water and groundwater connection', 'Recharge and availability insight', 'Better water-resource decisions'],
      steps: ['Collect site, rainfall and water-level information', 'Interpret flow, recharge and storage behaviour', 'Deliver site-specific hydrology recommendations'],
      facts: ['Rainfall and runoff', 'Aquifer recharge', 'Water availability']
    },
    'groundwater-investigation-stem': {
      title: 'Groundwater & Investigation (sTEM)',
      category: 'INVESTIGATION',
      image: '../assect/journey-analysis-v2.png',
      subtitle: 'Scientific groundwater investigation using sTEM-based interpretation for better subsurface understanding.',
      intro: 'Our groundwater investigation service combines field investigation with scientific interpretation to improve understanding of subsurface conditions before a project moves into implementation.',
      detail: 'We organise the available geological, hydrogeological and field evidence into practical findings that support groundwater targeting, resource planning and technical reporting.',
      benefits: ['Structured subsurface investigation', 'Evidence-led groundwater targeting', 'Clear technical interpretation'],
      steps: ['Define the site question and investigation plan', 'Collect and interpret field evidence', 'Share findings, risks and next-step recommendations'],
      facts: ['Groundwater targeting', 'Field investigation', 'Technical interpretation']
    },
    'gpr-survey': {
      layout: 'gpr', title: 'Ground Penetrating Radar (GPR) Survey Services', category: 'GPR SURVEY', image: '../assect/service-geophysical-survey-generated.png',
      heroImage: '../assect/srv-geophysical.jpg',
      bannerFeatures: ['Accurate Results', 'Advanced Technology', 'Expert Team', 'Sustainable Solutions'],
      overviewTitle: 'What is a Ground Penetrating Radar (GPR) Survey?',
      heroCta: 'Request a Survey',
      ctaTitle: 'Need a Professional GPR Survey?',
      ctaText: 'Whether you are planning construction, locating underground utilities, or conducting a site investigation, our experienced team can provide a reliable GPR survey tailored to your project requirements.',
      ctaLabel: 'Request a Consultation',
      overviewLead: 'Ground Penetrating Radar (GPR) is a non-invasive geophysical technique used to detect and map underground utilities, voids, buried structures, geological layers and other subsurface features using high-frequency electromagnetic waves into the ground.',
      overviewSecondary: 'Our GPR survey services help you make informed decisions, reduce project risks, and avoid costly damages during excavation and construction.',
      subtitle: 'Accurate, non-destructive subsurface investigations for utility mapping, buried structure detection, and site assessment using advanced GPR technology.',
      intro: 'Ground Penetrating Radar (GPR) is a non-invasive geophysical survey technique used to investigate subsurface conditions without excavation. GPR identifies and maps underground features by transmitting high-frequency electromagnetic waves into the ground.',
      detail: 'The technology is widely used for utility mapping, infrastructure development, construction planning, geotechnical investigations, and structural assessments where accurate underground information is essential before excavation or development begins.',
      benefits: ['No excavation required', 'Non-destructive investigation method', 'Identification of buried structures', 'Accurate utility detection', 'Minimal disruption to site operations', 'Detection of underground voids and cavities', 'Rapid data collection and interpretation', 'Suitable for roads, buildings, industrial sites, and open land'],
      steps: ['Site Assessment — We understand project requirements and identify the scope of investigation.', 'Survey Planning — The survey methodology, equipment, and grid layout are prepared based on site conditions.', 'Field Investigation — Ground-penetrating radar equipment is deployed to collect subsurface data across the survey area.', 'Data Interpretation — Collected radar data is processed and interpreted by experienced professionals.', 'Reporting — A detailed survey report, including findings, observations, and recommendations, is submitted.'],
      facts: ['Utility mapping', 'Void detection', 'Buried structures'],
      longForm: {
        whyTitle: 'Why Ground Penetrating Radar?',
        whyText: 'Ground Penetrating Radar provides valuable underground information while eliminating the need for unnecessary excavation. It is a fast, reliable, and non-destructive investigation method that helps reduce project risks and supports informed decision-making.',
        solutions: [
          ['Underground Utility Mapping', 'Identification of water pipelines, electrical cables, telecommunication lines, drainage systems, gas pipelines, and other buried utilities before excavation.'],
          ['Void & Cavity Detection', 'Detection of underground voids, sinkholes, cavities, and weak zones that may affect structural stability.'],
          ['Buried Structure Detection', 'Locating foundations, concrete slabs, underground tanks, abandoned structures, and other concealed construction elements.'],
          ['Structural Investigation', 'Assessment of reinforced concrete elements, slab thickness, reinforcement layout, and structural components without damaging existing structures.'],
          ['Pre-Construction Site Investigation', 'Subsurface investigations to support construction planning, excavation, utility relocation, and infrastructure development.']
        ],
        applications: ['Oil & Gas', 'Government Projects', 'Smart City Projects', 'Water Supply Projects', 'Construction', 'Highways & Roads', 'Infrastructure Development', 'Airports', 'Railways', 'Educational Institutions', 'Commercial Developments', 'Industrial Facilities'],
        strengths: ['Experienced hydrogeologists and geophysical specialists', 'Non-destructive investigation techniques', 'Advanced Ground Penetrating Radar equipment', 'Timely project execution', 'Accurate data interpretation', 'Technical reporting and documentation', 'Commitment to quality and safety', 'Services across industrial, commercial, and infrastructure sectors'],
        faqs: [
          ['How deep can a GPR survey detect underground features?', 'The depth of detection depends on soil conditions, moisture content, material type, and the antenna frequency used. Our team selects the appropriate equipment based on the specific requirements of each project.'],
          ['What information is included in a GPR survey report?', 'The report can include survey methodology, site observations, radar profiles, mapped anomalies, utility or structure locations, interpreted depths, limitations, and practical recommendations.'],
          ['Can GPR surveys be carried out without interrupting site operations?', 'Yes. GPR is a non-destructive and low-disruption method that can usually be carried out while normal site activity continues, subject to safe access and site conditions.'],
          ['Is GPR suitable for all ground conditions?', 'GPR performance varies with soil type, moisture, clay content, surface cover, and target depth. We review the ground conditions and select suitable equipment and survey parameters before fieldwork.'],
          ['Which industries benefit from GPR surveys?', 'Construction, roads, railways, airports, utilities, water supply, oil and gas, government, smart-city, industrial, commercial, and educational projects can all benefit from GPR investigations.'],
          ['Why should a GPR survey be conducted before excavation?', 'It helps identify buried utilities, voids, foundations, tanks, and other obstructions before excavation, reducing safety risks, delays, service damage, and avoidable project costs.'],
          ['Can GPR surveys identify both metallic and non-metallic utilities?', 'Yes. GPR can help identify many metallic and non-metallic targets, including pipes, cables, conduits, slabs, foundations, and other changes in subsurface material.'],
          ['How should a site be prepared before a GPR survey?', 'Provide safe access, available site drawings or utility records, clear the survey area where possible, mark restricted zones, and share the project objective so the survey grid can be planned accurately.']
        ]
      }
    },
    'cgwa-application': {
      title: 'CGWA Approval & Application Assistance', category: 'COMPLIANCE', image: '../assect/service-cgwa-consultancy-generated.png',
      subtitle: 'Professional assistance for obtaining Central Ground Water Authority (CGWA) approvals, including documentation, technical assessments, application submission, and regulatory compliance.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need Assistance with Your CGWA Application?',
      ctaText: 'Our experts can help you prepare the required documentation, complete technical assessments, and navigate the CGWA approval process with confidence.',
      ctaLabel: 'Contact Our Team',
      intro: 'The Central Ground Water Authority (CGWA) regulates groundwater extraction to promote sustainable water resource management across India. Industries, infrastructure projects, commercial establishments, mining operations, and other groundwater users may require CGWA approval before extracting groundwater, depending on applicable regulations.',
      detail: 'At Hydrogeological, our team provides end-to-end assistance throughout the application process, ensuring all technical documentation, groundwater assessments, and compliance requirements are prepared in accordance with CGWA guidelines.',
      benefits: ['Application documentation support', 'Hydrogeological assessment', 'Documentation and compliance', 'Liaison and submission support'],
      steps: ['Project and water-use review — We understand the site, purpose, demand and applicable approval requirement.', 'Hydrogeological assessment — We prepare the technical inputs and groundwater assessment needed for the application.', 'Documentation and application preparation — We organise forms, reports, drawings and supporting information for review.', 'Submission and coordination — We support submission, follow-up and responses through the approval process.'],
      facts: ['CGWA forms', 'NOC support', 'Compliance review'],
      longForm: {
        whyLabel: 'CGWA OVERVIEW',
        whyTitle: 'What is CGWA Approval?',
        whyText: 'The Central Ground Water Authority (CGWA) regulates groundwater extraction to promote sustainable water resource management across India. Industries, infrastructure projects, commercial establishments, mining operations, and other groundwater users may require CGWA approval before extracting groundwater, depending on applicable regulations.',
        solutionsTitle: 'Our CGWA Services',
        solutionsIntro: 'We assist clients at every stage of the approval process by providing technical expertise and regulatory guidance.',
        solutions: [
          ['Application Preparation', 'Preparation and submission of CGWA applications with complete supporting documentation.'],
          ['Hydrogeological Assessment', 'Technical evaluation of groundwater conditions and preparation of hydrogeological reports where required.'],
          ['Documentation & Compliance', 'Preparation of mandatory documents, reports, drawings, and supporting information to meet regulatory requirements.'],
          ['Liaison & Submission Support', 'Assistance throughout the application process, including submission and coordination for regulatory approvals.']
        ],
        sectorLabel: 'WHO REQUIRES CGWA APPROVAL?',
        sectorTitle: 'Who Requires CGWA Approval?',
        sectorIntro: 'Our services support a wide range of sectors, including:',
        applications: ['Residential Townships', 'Industrial Parks', 'Mining Operations', 'Government Projects', 'Manufacturing Industries', 'Hotels & Hospitality', 'Commercial Buildings', 'Hospitals', 'Educational Institutions', 'Infrastructure Projects'],
        processLabel: 'APPLICATION WORKFLOW',
        processTitle: 'Our Process',
        strengthsLabel: 'WHY CHOOSE US?',
        strengthsTitle: 'End-to-end CGWA application support',
        strengths: ['Experience with CGWA regulatory procedures', 'Hydrogeological expertise', 'Complete documentation support', 'End-to-end application assistance', 'Timely coordination throughout the process', 'Regulatory compliance guidance', 'Professional technical reporting', 'Support for diverse industries and projects'],
        faqs: [
          ['Who is required to obtain CGWA approval?', 'CGWA approval may be required for industries, infrastructure projects, commercial establishments, institutions, and other entities extracting groundwater, depending on applicable regulations and project location.'],
          ['How long does the CGWA approval process take?', 'The timeline depends on the project category, document readiness, technical requirements, portal processing and any clarification requested by the authority.'],
          ['What documents are required for a CGWA application?', 'Requirements vary by project, but may include site details, water demand, ownership or permission documents, well information, drawings, technical reports and other supporting records.'],
          ['Do you provide hydrogeological reports for CGWA applications?', 'Yes. We coordinate the required hydrogeological assessment and technical reporting based on the project scope and applicable submission requirements.'],
          ['Can you assist with the complete CGWA application process?', 'Yes. We support documentation, technical inputs, application preparation, submission coordination and responses during the review process.'],
          ['Can you assist existing groundwater users with compliance requirements?', 'Yes. We can review available approvals, usage information and reporting needs, then help organise practical compliance actions.'],
          ['What are the common reasons for delays in CGWA applications?', 'Incomplete documents, inconsistent project information, missing technical inputs, unclear water demand details and delayed responses to clarifications can affect processing time.'],
          ['Can you assist with CGWA renewal and compliance after approval?', 'Yes. We can support renewal preparation, compliance documentation and ongoing technical coordination based on the applicable requirements.']
        ]
      }
    },
    'cleaning-recharge-well': {
      title: 'Cleaning Of Recharge Well', category: 'MAINTENANCE', image: '../assect/service-recharge-well-generated.png',
      subtitle: 'Professional recharge-well cleaning and media maintenance for improved groundwater recharge.',
      intro: 'Recharge structures need regular cleaning to keep water moving through filters, shafts and recharge zones without avoidable clogging.',
      detail: 'We assess silt, debris and filter-media condition, then recommend cleaning and maintenance actions that improve recharge performance and service life.',
      benefits: ['Recharge performance assessment', 'Silt and debris removal planning', 'Maintenance recommendations'],
      steps: ['Inspect the recharge structure', 'Identify blockage and media condition', 'Complete cleaning guidance and performance checks'], facts: ['Silt removal', 'Filter upkeep', 'Recharge performance']
    },
    'drilling-borewell': {
      title: 'Borewell Drilling Services', category: 'DRILLING', image: '../assect/service-production-well-generated.png',
      subtitle: 'Reliable borewell drilling services for residential, agricultural, commercial, and industrial water requirements, supported by site assessment, hydrogeological expertise, and appropriate drilling methods.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Planning a Borewell for Your Site?',
      ctaText: "Our team can assist with groundwater assessment, borewell location identification, drilling, well development, and yield evaluation based on your site's requirements.",
      ctaLabel: 'Contact Our Team',
      intro: 'Borewell drilling involves creating a drilled well to access groundwater beneath the surface. The success of a borewell depends on several factors, including local geology, groundwater conditions, depth, rock formations, and the selection of suitable drilling methods and equipment.',
      detail: 'Our borewell drilling services combine hydrogeological assessment with field experience to identify suitable drilling locations and execute drilling work according to site conditions. Before drilling begins, relevant information about the site and groundwater conditions is assessed to determine the appropriate approach.',
      benefits: ['Access to groundwater for different water requirements', 'Better understanding of subsurface geological conditions', 'Site-specific assessment before drilling', 'Reduced risk of unnecessary drilling', 'Appropriate drilling method based on ground conditions', 'Professional drilling and well development', 'Suitable solutions for residential, agricultural, and industrial applications', 'Technical assessment of groundwater conditions'],
      steps: ['Site Assessment — We review the location, groundwater requirements, geological conditions, and available information to determine the appropriate drilling approach.', 'Groundwater Investigation — Where required, hydrogeological and geophysical investigations identify potential groundwater-bearing formations and suitable drilling locations.', 'Drilling — The borewell is drilled using appropriate equipment and methods selected according to the geological formation, expected depth, and project requirements.', 'Well Development — The borewell is developed to remove drilling materials and fine sediments, helping improve groundwater flow and well performance.', 'Yield Assessment & Completion — The borewell is assessed for performance and groundwater yield before suitable casing, screens, pumping equipment, and other components are installed.'], facts: ['Borewell drilling', 'Casing design', 'Well development'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Borewell Drilling for Reliable Groundwater Access',
        whyText: 'A properly planned borewell can provide a reliable groundwater source when designed and drilled according to the geological and hydrogeological conditions of the site.',
        solutionsTitle: 'Our Borewell Drilling Services',
        solutionsIntro: 'We provide borewell drilling solutions based on the groundwater requirements and geological conditions of each site.',
        solutions: [
          ['Hydrogeological Site Assessment', "We assess the site's geological and groundwater conditions to identify suitable locations for drilling. Where required, geophysical investigations may be used to obtain additional information about subsurface formations."],
          ['Borewell Drilling', 'Our team carries out drilling using suitable equipment and methods based on the geological formation, expected depth, and project requirements.'],
          ['Well Development', 'Following drilling, appropriate well development procedures are undertaken to remove drilling debris and improve the movement of groundwater into the borewell.'],
          ['Borewell Yield Assessment', 'Where required, pumping and yield assessment help evaluate the performance of the borewell and provide information about its groundwater-producing capacity.'],
          ['Borewell Installation Support', 'We provide technical support for the installation of suitable casing, screens, pumps, and related components based on borewell conditions and water requirements.']
        ],
        sectorLabel: 'APPLICATIONS ACROSS INDUSTRIES',
        sectorTitle: 'Where Borewell Drilling Helps',
        sectorIntro: 'Our borewell drilling services can be used across a range of sectors and applications, including:',
        applications: ['Agricultural & Irrigation', 'Educational Institutions', 'Infrastructure Developments', 'Hotels & Hospitality', 'Institutional & Government Projects', 'Commercial Buildings', 'Residential Properties', 'Manufacturing Units', 'Industrial Facilities', 'Hospitals & Healthcare'],
        processLabel: 'DRILLING WORKFLOW',
        processTitle: 'Our Borewell Drilling Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Technical planning with dependable field execution',
        strengths: ['Experienced hydrogeologists and drilling specialists', 'Appropriate drilling methods and equipment', 'Site-specific groundwater assessment', 'Hydrogeological and geophysical investigation support', 'Groundwater yield assessment', 'Professional well development', 'Technical reporting and documentation', 'Services across residential, agricultural, commercial, and industrial sectors'],
        faqs: [
          ['How is a suitable location for borewell drilling identified?', 'The location is selected after considering geological and hydrogeological conditions. Depending on the site, geophysical surveys may also be conducted to identify formations that may have groundwater potential.'],
          ['Is a groundwater survey required before drilling a borewell?', 'A site assessment is recommended before drilling. The scope may include available geological information, groundwater conditions and, where appropriate, hydrogeological or geophysical investigation.'],
          ['How deep does a borewell need to be?', 'The required depth depends on local geology, groundwater levels, water demand, target formations and the results of the site investigation.'],
          ['How is the performance of a borewell evaluated?', 'Performance can be evaluated through pumping, yield and recovery observations, along with field records and technical interpretation.'],
          ['What type of drilling equipment is used?', 'Equipment and drilling methods are selected according to the geological formation, expected depth, access conditions and project requirements.'],
          ['Can borewells be drilled for industrial and commercial requirements?', 'Yes. Borewell planning and drilling can support residential, agricultural, commercial, institutional, healthcare and industrial water requirements.']
        ]
      }
    },
    'environmental-remediation': {
      title: 'Environmental Remediation Services', category: 'ENVIRONMENT', image: '../assect/industry-agriculture.jpg',
      subtitle: 'Professional environmental remediation services for assessing, managing, and addressing soil and groundwater contamination across industrial, commercial, infrastructure, and development sites.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need Help Assessing an Environmental Concern?',
      ctaText: 'Speak with our technical team about site investigation, contamination assessment, remediation planning, and environmental monitoring.',
      ctaLabel: 'Contact Our Team',
      intro: 'Environmental remediation is the process of identifying, assessing, and managing contamination that may affect soil, groundwater, surface water, or surrounding environments. Contamination can happen through industrial operations, chemical handling, fuel storage, waste disposal, accidental spills, or historical activities at a site.',
      detail: 'Our team conducts environmental investigations and technical assessments to understand the nature and extent of contamination before recommending an appropriate course of action. By combining hydrogeological expertise, field investigation, and environmental assessment, we help clients address contamination and manage environmental risks effectively.',
      benefits: ['Identification of contaminated soil and groundwater', 'Reduction of environmental and groundwater risks', 'Assessment of contamination extent and movement', 'Safer conditions for redevelopment and future land use', 'Support for regulatory and environmental requirements', 'Technical information for informed project decisions', 'Better management of affected sites'],
      steps: ['Site Assessment — We review the site history, current use, surrounding conditions, and potential contamination sources to define the investigation scope.', 'Environmental Investigation — We conduct field investigations and collect relevant soil, groundwater, or other environmental samples.', 'Data Analysis — Field and laboratory data are analysed to assess contamination levels, subsurface conditions, and potential risks.', 'Remediation Planning — We develop a suitable strategy that may include treatment, removal, containment, monitoring, or a combination of measures.', 'Implementation & Monitoring — Selected measures are implemented with technical oversight and ongoing monitoring where required.'], facts: ['Site assessment', 'Risk reduction', 'Restoration planning'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'What is Environmental Remediation?',
        whyText: 'Environmental remediation is the process of identifying, assessing, and managing contamination that may affect soil, groundwater, surface water, or surrounding environments. Early assessment and appropriate remediation help identify potential risks and provide a clear basis for managing affected areas.',
        solutionsTitle: 'Our Environmental Remediation Services',
        solutionsIntro: 'We combine hydrogeological expertise, field investigation and environmental assessment to understand contamination and plan practical responses.',
        solutions: [
          ['Contamination Site Assessment', 'Investigation of potentially contaminated areas to identify sources, affected zones, and the nature of contamination.'],
          ['Groundwater Remediation', 'Investigation and management of groundwater contamination, including assessment of groundwater conditions and contaminant movement.'],
          ['Soil Remediation', 'Assessment and management of contaminated soil through appropriate treatment, removal, containment, or other site-specific measures.'],
          ['Environmental Monitoring', 'Ongoing sampling and assessment to track environmental conditions and evaluate the effectiveness of remediation measures.']
        ],
        sectorLabel: 'APPLICATIONS ACROSS INDUSTRIES',
        sectorTitle: 'Where Our Expertise Helps',
        sectorIntro: 'Our environmental remediation expertise can support:',
        applications: ['Commercial Developments', 'Warehouses & Logistics Facilities', 'Construction & Redevelopment Sites', 'Government & Institutional Properties', 'Industrial & Manufacturing Facilities', 'Oil & Fuel Storage Facilities', 'Chemical & Processing Units', 'Mining Sites', 'Infrastructure Projects'],
        processLabel: 'REMEDIATION WORKFLOW',
        processTitle: 'Our Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Evidence-led environmental risk management',
        strengths: ['Experienced environmental and hydrogeological specialists', 'Detailed environmental investigation and assessment', 'Site-specific remediation strategies', 'Technical reporting and documentation', 'Accurate data analysis and interpretation', 'Groundwater and soil remediation expertise', 'Commitment to environmental safety and regulatory compliance', 'Timely project execution'],
        faqs: [
          ['What is environmental remediation?', 'Environmental remediation involves identifying, assessing, and managing contamination in soil, groundwater, surface water, or other environmental media to reduce associated risks and support safe site use.'],
          ['How is contamination identified?', 'Contamination is identified through site-history review, field investigation, targeted sampling and laboratory or technical analysis of soil, groundwater and other relevant environmental media.'],
          ['When is environmental remediation required?', 'It may be required when contamination poses a risk to people, groundwater, soil, surface water, site redevelopment or regulatory compliance.'],
          ['How long does environmental remediation take?', 'The duration depends on the type and extent of contamination, site access, investigation findings, selected remediation method, monitoring needs and applicable approvals.'],
          ['Can contaminated groundwater be treated?', 'Yes. Treatment or management options depend on the contaminant, groundwater conditions, movement, risk level and the feasibility of available remediation approaches.'],
          ['Does every contaminated site require complete removal of contaminated soil?', 'No. The appropriate response may include treatment, removal, containment, monitoring or a combination of measures based on site-specific risks and objectives.'],
          ['Is groundwater monitoring required after remediation?', 'Monitoring may be recommended to track environmental conditions and evaluate whether the selected remediation measures are performing as intended.'],
          ['Can you assist with remediation planning as well as investigation?', 'Yes. We support the process from site assessment and investigation through data interpretation, remediation planning, implementation oversight and monitoring.']
        ]
      }
    },
    'geo-technical-work': {
      title: 'Geotechnical Investigation Services', category: 'ENGINEERING', image: '../assect/proc-03-drilling.jpg',
      subtitle: 'Professional geotechnical investigation services to assess soil, rock, and subsurface conditions for construction, infrastructure, commercial, and industrial projects.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Planning a Construction or Infrastructure Project?',
      ctaText: "Our team can assist with geotechnical investigation, soil and rock assessment, field testing, groundwater evaluation, and technical reporting based on your project's requirements.",
      ctaLabel: 'Contact Our Team',
      intro: 'Geotechnical investigation is an important part of construction and infrastructure planning. It provides information about the soil, rock, groundwater, and subsurface conditions at a site before construction begins. Understanding these conditions helps engineers and project teams make appropriate decisions about foundations, structural design, excavation, and overall site development.',
      detail: 'Our geotechnical services involve field investigation, soil and rock assessment, testing, and technical evaluation to establish the engineering characteristics of the ground. The scope of investigation is determined according to the nature of the project, site conditions, and design requirements.',
      benefits: ['Better understanding of soil and subsurface conditions', 'Assessment of soil strength and engineering properties', 'Identification of groundwater conditions', 'Identification of potential ground-related risks', 'Support for appropriate foundation design', 'Reduced uncertainty during project execution', 'Technical information for excavation and construction planning', 'Reliable data for engineering and structural design'],
      steps: ['Project & Site Assessment — We understand the project type, proposed construction, site conditions, and available information to determine the scope of investigation.', 'Field Investigation — Boreholes, soil investigations, in-situ testing, and other appropriate field investigations are carried out at selected locations.', 'Sampling & Testing — Representative soil and rock samples are collected and subjected to relevant laboratory or field testing.', 'Data Analysis & Interpretation — Results are analysed to establish soil profiles, groundwater conditions, engineering parameters, and development factors.', 'Technical Reporting — Findings are compiled into a detailed geotechnical report with interpreted data and technical recommendations.'], facts: ['Ground conditions', 'Foundation inputs', 'Site safety'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Geotechnical Investigations',
        whyText: 'Ground conditions can vary significantly even within the same project site. A detailed geotechnical investigation helps identify these variations before construction and provides engineers with the information required to design foundations and other structural elements appropriately.',
        solutionsTitle: 'Our Geotechnical Services',
        solutionsIntro: 'We provide geotechnical investigation and testing services based on the requirements of each project.',
        solutions: [
          ['Soil Investigation', 'We investigate subsurface soil conditions to determine soil profiles, engineering properties, and variations across the site.'],
          ['Borehole Investigation', 'Boreholes are drilled at selected locations to obtain information about subsurface strata at different depths and identify relevant soil or rock formations.'],
          ['Standard Penetration Test', 'Standard Penetration Tests (SPT) are conducted during borehole investigations to assess the relative density or consistency of subsurface soils and support geotechnical design.'],
          ['Soil Sampling & Testing', 'Soil samples are collected from relevant depths and may be tested for grain size, moisture content, density, strength, and other engineering characteristics.'],
          ['Rock Investigation', 'Where rock formations are encountered, investigation and sampling help assess rock quality, strength, weathering, and other characteristics relevant to construction.'],
          ['Groundwater Assessment', 'Groundwater levels and subsurface water conditions are assessed where relevant, particularly for deep foundations, basements, excavation, or below-ground construction.']
        ],
        sectorLabel: 'APPLICATIONS ACROSS INDUSTRIES',
        sectorTitle: 'Projects We Support',
        sectorIntro: 'Our geotechnical services support a wide range of construction and infrastructure projects, including:',
        applications: ['Hospitals & Healthcare Facilities', 'Government & Institutional Developments', 'Smart City Projects', 'Water Supply Projects', 'Residential & Commercial Buildings', 'Manufacturing Units', 'Industrial Facilities', 'Roads & Highways', 'Warehouses & Logistics Facilities', 'Bridges & Infrastructure Projects', 'Educational Institutions', 'Power & Utility Projects'],
        processLabel: 'INVESTIGATION WORKFLOW',
        processTitle: 'Our Geotechnical Investigation Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Reliable ground data for confident engineering decisions',
        strengths: ['Experienced geotechnical and hydrogeological specialists', 'Standard field and laboratory testing methods', 'Detailed soil and subsurface investigations', 'Accurate data analysis and interpretation', 'Groundwater assessment support', 'Timely project execution', 'Technical reporting and documentation', 'Services across residential, commercial, industrial, and infrastructure sectors'],
        faqs: [
          ['Why is geotechnical investigation required before construction?', 'It helps engineers understand ground conditions, determine suitable foundation and construction approaches, and identify potential subsurface risks before construction begins.'],
          ['How many boreholes are required for a project?', 'The number and depth of boreholes depend on the project type, site area, structural loads, geology, design requirements and applicable investigation standards.'],
          ['What information does a geotechnical investigation provide?', 'It can provide soil profiles, engineering properties, groundwater conditions, rock information, foundation inputs, excavation considerations and other technical recommendations.'],
          ['Are soil samples collected during the investigation?', 'Yes. Representative soil and, where relevant, rock samples can be collected from selected depths and tested using suitable field or laboratory methods.'],
          ['Do you provide geotechnical reports after the investigation?', 'Yes. Findings are compiled into a technical report containing investigation results, interpreted data and recommendations for engineering and construction decisions.']
        ]
      }
    },
    'impact-assessment-report': {
      title: 'Impact Assessment Report Services', category: 'ASSESSMENT', image: '../assect/proc-02-analysis.jpg',
      subtitle: 'Comprehensive impact assessment and reporting services to evaluate the environmental and groundwater implications of proposed projects and support informed planning and regulatory requirements.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need an Impact Assessment for Your Project?',
      ctaText: "Our team can assist with baseline assessment, groundwater and environmental evaluation, impact identification, mitigation planning, and technical report preparation based on your project's requirements.",
      ctaLabel: 'Contact Our Team',
      intro: 'An Impact Assessment Report systematically evaluates the potential effects of a proposed project and how the project may affect the surrounding environment and natural resources. Depending on the nature and location of the project, an assessment may consider groundwater, surface water, soil, land use, ecology, and other relevant environmental conditions.',
      detail: 'Our team undertakes impact assessments based on site conditions, project requirements, and applicable regulatory considerations. We combine field investigations, technical data, environmental evaluation, and professional interpretation to prepare clear and relevant assessment reports.',
      benefits: ['Identification of potential environmental impacts', 'Evaluation of soil and site conditions', 'Early identification of environmental risks', 'Assessment of groundwater and surface water conditions', 'Development of appropriate mitigation measures', 'Better understanding of project environmental implications', 'Technical support for informed project decisions'],
      steps: ['Project & Site Assessment — We understand the proposed project, its location, activities, scale, and potential environmental concerns to determine the assessment scope.', 'Baseline Data Collection — Relevant environmental and site information is collected through field investigations, records, surveys, sampling, and other appropriate methods.', 'Impact Identification — Collected information is analysed to identify possible effects on groundwater, surface water, soil, and surrounding environmental conditions.', 'Impact Evaluation & Mitigation — Identified impacts are evaluated and appropriate mitigation and environmental management measures are recommended.', 'Report Preparation — Findings, supporting data, impact evaluation, and recommended measures are compiled into a detailed technical report.'], facts: ['Baseline study', 'Impact mapping', 'Mitigation report'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Impact Assessment Reports',
        whyText: 'A detailed impact assessment helps identify potential environmental concerns before they become significant project issues. It also provides technical information that can support project planning, environmental management, and regulatory submissions.',
        solutionsTitle: 'Our Impact Assessment Services',
        solutionsIntro: 'We provide impact assessment and technical reporting services based on the nature and requirements of each project.',
        solutions: [
          ['Baseline Environmental Assessment', 'We collect and evaluate information about existing environmental conditions to establish a baseline against which potential project impacts can be assessed.'],
          ['Surface Water Assessment', 'Nearby water bodies, drainage patterns, and surface water conditions are assessed where applicable to identify potential impacts and management measures.'],
          ['Soil & Land Assessment', 'Site and soil conditions are evaluated to understand impacts associated with construction, development, excavation, waste management, or other activities.'],
          ['Groundwater Impact Assessment', 'Groundwater conditions are evaluated to understand how a proposed activity may affect groundwater availability, quality, recharge, or movement.'],
          ['Impact Evaluation & Mitigation Planning', 'Potential impacts are identified and assessed, followed by suitable mitigation and management measures to reduce or manage risks.'],
          ['Technical Report Preparation', 'Field findings, data analysis, and impact evaluation are compiled into a structured technical report for planning, documentation, and applicable regulatory requirements.']
        ],
        sectorLabel: 'APPLICATIONS ACROSS INDUSTRIES',
        sectorTitle: 'Projects We Support',
        sectorIntro: 'Our impact assessment services can support a wide range of projects and activities, including:',
        applications: ['Institutional & Government Projects', 'Groundwater-Dependent Developments', 'Large-Scale Residential Developments', 'Projects Requiring Environmental Assessment', 'Industrial & Manufacturing Projects', 'Commercial Developments', 'Infrastructure Developments', 'Construction & Redevelopment Projects', 'Mining & Mineral-Related Projects', 'Water Resource Projects'],
        processLabel: 'ASSESSMENT WORKFLOW',
        processTitle: 'Our Impact Assessment Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Clear environmental evidence for better decisions',
        strengths: ['Experienced environmental and hydrogeological specialists', 'Detailed baseline environmental assessment', 'Site-specific impact assessment', 'Groundwater and surface water evaluation', 'Accurate data analysis and interpretation', 'Technical reporting and documentation', 'Practical mitigation recommendations', 'Services across industrial, commercial, and infrastructure sectors'],
        faqs: [
          ['What is an Impact Assessment Report?', 'An Impact Assessment Report evaluates the potential effects of a proposed project or activity on relevant environmental conditions and provides technical information to support planning, decision-making, and applicable regulatory requirements.'],
          ['When is an Impact Assessment Report required?', 'It may be required when a project could affect groundwater, surface water, soil, land use, ecology or other environmental conditions, depending on the project and applicable requirements.'],
          ['What does an impact assessment cover?', 'The scope can cover project activities, baseline conditions, soil, groundwater, surface water, land use, potential impacts, risks, mitigation and environmental management measures.'],
          ['Does an Impact Assessment Report include mitigation measures?', 'Yes. Where potential impacts are identified, practical mitigation and management measures can be recommended based on site conditions and project requirements.'],
          ['How long does it take to prepare an Impact Assessment Report?', 'The timeline depends on project size, site conditions, data availability, field investigation, sampling, analysis, reporting scope and any applicable review requirements.']
        ]
      }
    },
    'piezometer-supplier': {
      title: 'Piezometer Supplier', category: 'MONITORING', image: '../assect/hydrogeology-3d-recharge-diagram.jpg',
      subtitle: 'Reliable piezometer supply for groundwater monitoring, geotechnical investigations, construction projects, and environmental applications, with suitable equipment selected according to project and site requirements.',
      heroCta: 'Request a Quote',
      ctaTitle: 'Looking for the Right Piezometer for Your Project?',
      ctaText: 'Our team can help you select and source suitable piezometer equipment based on your monitoring requirements, site conditions, and project specifications.',
      ctaLabel: 'Request a Quote',
      intro: 'Piezometers are widely used in geotechnical, hydrogeological, environmental, and construction projects where monitoring groundwater conditions is important for understanding subsurface behaviour and managing potential risks.',
      detail: 'We supply piezometers for a range of applications and project requirements. The appropriate type depends on factors such as installation depth, ground conditions, monitoring objectives, required measurement range, and the nature of the project.',
      benefits: ['Accurate groundwater level and pressure monitoring', 'Support for geotechnical and hydrogeological investigations', 'Better understanding of subsurface water conditions', 'Early identification of changes in groundwater pressure', 'Monitoring of groundwater changes during construction', 'Suitable equipment for different depths and site conditions', 'Useful data for engineering and infrastructure projects', 'Support for long-term groundwater monitoring'],
      steps: ['Requirement Assessment — We understand the project, monitoring objectives, installation depth, site conditions, and other technical requirements.', 'Equipment Selection — We identify the appropriate type and configuration of piezometer for the application and monitoring requirement.', 'Product Supply — Selected piezometer equipment and relevant components are supplied according to agreed specifications.', 'Installation Guidance — Where required, we provide guidance regarding installation location, depth, placement, and related considerations.', 'Monitoring Support — After installation, we provide technical guidance to support effective groundwater pressure or water-level monitoring.'], facts: ['Piezometer supply', 'Level monitoring', 'Field equipment'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Piezometers for Groundwater & Subsurface Monitoring',
        whyText: 'Groundwater pressure and water levels can influence soil behaviour, foundation performance, slope stability, excavation conditions, and other aspects of construction and infrastructure projects. Regular monitoring provides useful information about changes in subsurface water conditions over time.',
        solutionsTitle: 'Our Piezometer Supply Solutions',
        solutionsIntro: 'We supply piezometer equipment for different monitoring requirements and project applications.',
        solutions: [
          ['Standpipe Piezometers', 'Standpipe piezometers are commonly used for measuring groundwater levels and pore water pressure in soil and rock formations where long-term monitoring is required.'],
          ['Vibrating Wire Piezometers', 'Vibrating wire piezometers are designed for measuring pore water pressure in geotechnical and structural monitoring applications where accurate measurements are required.'],
          ['Water Level Monitoring Piezometers', 'Piezometer systems can monitor groundwater levels at defined depths, providing information about changes in groundwater conditions over time.'],
          ['Piezometer Accessories', 'Depending on the project, installation may require tubing, cables, filters, protective arrangements, and other related accessories.'],
          ['Installation Support', 'Where required, we provide technical guidance regarding piezometer placement, installation depth, monitoring locations, and project-specific considerations.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Piezometers',
        sectorIntro: 'Piezometers are used across geotechnical, hydrogeological, environmental, and infrastructure projects, including:',
        applications: ['Mining Projects', 'Environmental Monitoring', 'Industrial Developments', 'Water Resource Management', 'Groundwater Monitoring', 'Dam & Reservoir Projects', 'Geotechnical Investigations', 'Embankment Monitoring', 'Excavation & Construction', 'Foundation Investigations', 'Slope Stability Studies', 'Roads & Infrastructure Projects'],
        processLabel: 'SUPPLY WORKFLOW',
        processTitle: 'Our Piezometer Supply Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Equipment matched to your monitoring requirement',
        strengths: ['Experienced hydrogeological and geotechnical specialists', 'Piezometers for varied monitoring applications', 'Equipment selected according to project requirements', 'Technical guidance on product selection', 'Support for groundwater and pore pressure monitoring', 'Installation guidance and technical assistance', 'Quality equipment and related accessories', 'Supply for industrial, infrastructure, environmental, and geotechnical projects'],
        faqs: [
          ['What is a piezometer used for?', 'A piezometer is used to measure groundwater levels or pore water pressure within soil and rock formations. The data supports subsurface water, geotechnical and hydrogeological monitoring.'],
          ['How will I know which type of piezometer is suitable for my project?', 'Selection depends on installation depth, ground conditions, monitoring objectives, measurement range, access, installation method and the type of data required.'],
          ['Where are piezometers commonly installed?', 'They are used in foundations, embankments, dams, slopes, excavations, mining sites, environmental monitoring locations, groundwater projects and infrastructure works.'],
          ['What is the difference between a standpipe and a vibrating wire piezometer?', 'Standpipe piezometers are commonly used for groundwater-level or pore-pressure monitoring over time, while vibrating wire piezometers are suited to accurate pressure measurement and automated or structural monitoring applications.'],
          ['Do you provide installation support for piezometers?', 'Yes. We can provide technical guidance on location, placement, depth, accessories and installation considerations based on the project.'],
          ['What information is required before purchasing a piezometer?', 'Useful information includes the project purpose, monitoring objective, installation depth, site and ground conditions, measurement range, installation arrangement and required accessories.']
        ]
      }
    },
    'pump-test': {
      title: 'Pump Test Services', category: 'TESTING', image: '../assect/proc-04-testing.jpg',
      subtitle: 'Accurate pumping tests to evaluate borewell performance, groundwater yield, drawdown, and aquifer response for groundwater development, infrastructure, industrial, and water resource projects.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need to Assess Your Borewell Performance?',
      ctaText: 'Our team can assist with pump testing, groundwater level monitoring, drawdown and recovery assessment, data analysis, and technical reporting based on your project requirements.',
      ctaLabel: 'Contact Our Team',
      intro: "A pump test is a hydrogeological investigation used to evaluate the performance of a borewell or well and understand the surrounding aquifer's response to pumping. It provides important information about the quantity of water that can be sustainably extracted by monitoring groundwater levels during pumping and subsequent recovery.",
      detail: 'Our pump testing services involve systematic measurement and monitoring of groundwater levels before, during, and after pumping. The collected field data is analysed to evaluate borewell performance and relevant groundwater conditions.',
      benefits: ['Assessment of borewell yield and performance', 'Evaluation of aquifer response to pumping', 'Measurement of groundwater drawdown', 'Determination of suitable pumping rates', 'Assessment of groundwater recovery', 'Support for borewell and water supply planning', 'Technical information for groundwater management', 'Reliable field data for hydrogeological assessment'],
      steps: ['Well & Site Assessment — We review borewell characteristics, site conditions, groundwater requirements, available information, and the objectives of the pumping test.', 'Test Planning — The testing method, pumping rate, monitoring duration, equipment, and observation points are determined based on the well and project requirements.', 'Initial Water Level Measurement — Static groundwater levels are recorded before pumping to establish baseline conditions.', 'Pumping & Monitoring — The well is pumped at the specified rate while groundwater levels and relevant measurements are recorded at defined intervals.', 'Recovery Monitoring — Once pumping stops, groundwater levels are monitored during recovery to assess the well and aquifer response.'], facts: ['Yield testing', 'Drawdown data', 'Recovery analysis'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Pump Tests',
        whyText: 'It is difficult to assess borewell performance through depth or static water level alone. Pump testing provides field-based information about how the well responds when water is extracted and how quickly groundwater levels recover after pumping stops.',
        solutionsTitle: 'Our Pump Test Services',
        solutionsIntro: 'We provide pumping tests based on the characteristics of the well and the objectives of the investigation.',
        solutions: [
          ['Constant Rate Pumping Test', 'Water is pumped from the well at a controlled and consistent rate while groundwater levels are monitored over a defined period to assess performance and aquifer response.'],
          ['Recovery Test', 'After pumping is stopped, groundwater levels are monitored as they recover towards their original condition, providing additional information about aquifer and well response.'],
          ['Step-Drawdown Test', 'Pumping is carried out at different flow rates in a series of steps to evaluate well efficiency and understand the relationship between pumping rate and drawdown.'],
          ['Pump Test Data Analysis', 'Field measurements are analysed to evaluate drawdown, recovery, well performance, and relevant aquifer characteristics.'],
          ['Groundwater Level Monitoring', 'Water levels are recorded before, during, and after pumping to establish changes in groundwater conditions and provide data for technical interpretation.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Pump Testing',
        sectorIntro: 'Pump tests can support a variety of groundwater and water resource projects, including:',
        applications: ['Groundwater Resource Evaluation', 'Water Supply Planning', 'Infrastructure Developments', 'Regulatory & Technical Assessments', 'Industrial Water Supply Projects', 'Groundwater Exploration & Development', 'Agricultural & Irrigation Projects', 'Residential & Institutional Projects', 'Commercial Developments', 'Aquifer Studies'],
        processLabel: 'TESTING WORKFLOW',
        processTitle: 'Our Pump Test Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Reliable field data for groundwater decisions',
        strengths: ['Experienced hydrogeologists and groundwater specialists', 'Accurate groundwater level monitoring', 'Systematic pump testing procedures', 'Appropriate pumping and measurement equipment', 'Technical data analysis and interpretation', 'Detailed drawdown and recovery assessment', 'Comprehensive reporting and documentation', 'Services across industrial, agricultural, commercial, and infrastructure projects'],
        faqs: [
          ['What is the purpose of a pump test?', 'A pump test evaluates borewell performance and provides information about groundwater yield, drawdown, recovery, and the response of the surrounding aquifer to pumping.'],
          ['Why is recovery monitoring carried out after pumping?', 'Recovery monitoring shows how groundwater levels return after pumping stops and provides additional information about well and aquifer response.'],
          ['What is a step-drawdown test?', 'A step-drawdown test pumps water at different flow rates in a series of steps to evaluate well efficiency and the relationship between pumping rate and drawdown.'],
          ['Can pump testing determine the sustainable yield of a borewell?', 'Pump-test data can support an assessment of suitable pumping rates and groundwater yield, interpreted together with site conditions, test duration and hydrogeological information.']
        ]
      }
    },
    'rain-water-harvesting': {
      title: 'Rainwater Harvesting Solutions', category: 'CONSERVATION', image: '../assect/service-recharge-well-generated.png',
      subtitle: 'Sustainable rainwater harvesting systems designed to conserve water, recharge groundwater, and support long-term water management for residential, commercial, industrial, and institutional projects.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Build a Sustainable Water Management System',
      ctaText: 'Whether you require a new rainwater harvesting installation or want to improve an existing system, our team can design and implement solutions that support efficient water conservation and groundwater recharge.',
      ctaLabel: 'Contact Our Team',
      intro: 'Rainwater harvesting includes the process of collecting, filtering, and directing rainwater for storage or groundwater recharge. The biggest benefit is that it helps reduce dependence on conventional water sources, improves groundwater levels, and promotes efficient water resource management.',
      detail: 'At Hydrogeological, we provide end-to-end rainwater harvesting solutions, including site assessment, system design, installation support, and maintenance, ensuring every system is designed to suit the site\'s requirements and applicable guidelines.',
      benefits: ['Enhances groundwater recharge', 'Conserves valuable water resources', 'Reduces dependence on municipal water supply', 'Helps prevent soil erosion', 'Minimises stormwater runoff', 'Supports sustainable water management', 'Improves water availability during scarcity', 'Reduces water bills'],
      steps: ['Site Assessment — Evaluation of site conditions, catchment areas, soil characteristics, and project requirements.', 'System Design — Preparation of customised designs based on available space, rainfall data, and groundwater recharge objectives.', 'Installation — Construction and installation of harvesting structures using appropriate materials and engineering practices.', 'Testing & Commissioning — Verification of system performance before handover.', 'Maintenance Support — Regular inspection and maintenance services to ensure long-term efficiency.'],
      facts: ['Runoff capture', 'Filtration design', 'Aquifer recharge'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'What is Rainwater Harvesting?',
        whyText: 'Rainwater harvesting includes the process of collecting, filtering, and directing rainwater for storage or groundwater recharge. The biggest benefit is that it helps reduce dependence on conventional water sources, improves groundwater levels, and promotes efficient water resource management.',
        solutionsTitle: 'Comprehensive Rainwater Harvesting Solutions',
        solutionsIntro: 'We offer complete rainwater harvesting services for new developments as well as existing properties.',
        solutions: [
          ['System Planning & Design', 'We assess site conditions, rainfall patterns, catchment areas, and water requirements to design efficient rainwater harvesting systems.'],
          ['Rooftop Rainwater Harvesting', 'Collection of rainwater from rooftops through filtration systems for groundwater recharge or storage.'],
          ['Groundwater Recharge Systems', 'Design and construction of recharge wells, recharge pits, and other structures that help replenish groundwater resources.'],
          ['Filtration Systems', 'Installation of filtration units to remove debris, sediments, and impurities before water enters storage or recharge systems.'],
          ['Maintenance & Performance Assessment', 'Inspection, cleaning, and maintenance of rainwater harvesting systems to ensure efficient operation throughout the year.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Where Rainwater Harvesting Helps',
        sectorIntro: 'Our rainwater harvesting solutions are designed for:',
        applications: ['Hotels & Resorts', 'Warehouses', 'Manufacturing Units', 'Infrastructure Projects', 'Commercial Buildings', 'Educational Institutions', 'Industrial Facilities', 'Residential Communities', 'Hospitals', 'Government Buildings'],
        processLabel: 'IMPLEMENTATION WORKFLOW',
        processTitle: 'Our Process',
        strengthsLabel: 'WHY CHOOSE US?',
        strengthsTitle: 'Complete water conservation support',
        strengths: ['Experienced hydrogeology and water management professionals', 'Compliance with applicable guidelines and standards', 'Site-specific system design', 'Quality materials and construction practices', 'Technical expertise in groundwater recharge', 'End-to-end project execution', 'Timely project delivery', 'Long-term maintenance support'],
        faqs: [
          ['What is the purpose of a rainwater harvesting system?', 'A rainwater harvesting system collects and manages rainwater for storage or groundwater recharge, helping conserve water resources and improve long-term water availability.'],
          ['How is a rainwater harvesting system designed?', 'The design considers catchment area, rainfall patterns, runoff quality, soil and groundwater conditions, available space, water demand and the choice between storage and recharge.'],
          ['Is rainwater harvesting suitable for existing buildings?', 'Yes. Existing buildings can often be assessed for rooftop collection, filtration, storage or recharge options based on site conditions and available space.'],
          ['What types of properties can benefit from rainwater harvesting?', 'Residential communities, commercial buildings, hotels, hospitals, educational institutions, industrial facilities, warehouses and infrastructure projects can all benefit.'],
          ['How often should a rainwater harvesting system be maintained?', 'Inspection and cleaning should be planned around rainfall patterns, debris load, filter condition and the type of storage or recharge structure installed.'],
          ['Can rainwater harvesting help improve groundwater levels?', 'Recharge-focused systems can help direct suitable filtered runoff into the ground and support groundwater replenishment where local conditions allow.'],
          ['Can rainwater harvesting reduce water costs?', 'By supplementing conventional water sources with collected rainwater, a well-designed system can reduce demand and support lower water costs.'],
          ['Do rainwater harvesting systems require regular maintenance?', 'Yes. Filters, collection points, storage tanks and recharge structures need periodic inspection, cleaning and performance checks for reliable operation.']
        ]
      }
    },
    'water-audit': {
      title: 'Water Audit Services', category: 'EFFICIENCY', image: '../assect/journey-impact-v2.png',
      subtitle: 'Water audit services to assess water use, identify losses, improve efficiency, and support sustainable water management across industrial, commercial, institutional, and infrastructure projects.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Looking to Improve Your Water Management?',
      ctaText: "Our team can help assess your water consumption, identify losses, evaluate conservation opportunities, and develop practical recommendations based on your facility's requirements.",
      ctaLabel: 'Contact Our Team',
      intro: 'A water audit is a systematic assessment of how water enters, moves through, and is used within a facility or project. It helps establish where water is being consumed, identify losses or inefficiencies, and determine opportunities to improve overall water management.',
      detail: 'Our water audit services combine field assessment, water-use data, measurements, and technical analysis to evaluate existing water management practices. We identify areas for improvement and develop practical recommendations suited to operations, infrastructure, and water requirements.',
      benefits: ['Detailed assessment of water consumption', 'Better understanding of site-wide water usage', 'Identification of water losses and inefficiencies', 'Evaluation of water distribution and usage patterns', 'Support for sustainable water management', 'Identification of water reuse and recycling opportunities', 'Improved planning for future water requirements', 'Technical basis for water-saving measures'],
      steps: ['Site & Requirement Assessment — We understand the facility, operations, water sources, consumption patterns, and audit objectives to define the assessment scope.', 'Data Collection — Water bills, meter readings, production information, records, field measurements, and observations are reviewed where required.', 'Water Use Assessment — Consumption is assessed across processes, departments, utilities, and usage points to establish how water is distributed and used.', 'Water Balance & Loss Assessment — Information is used to prepare a water balance and identify discrepancies, losses, leakages, and inefficient practices.', 'Conservation Assessment — Measures for reducing consumption, improving efficiency, and increasing reuse or recycling are evaluated.', 'Reporting & Recommendations — Findings are compiled into a technical water audit report with observations and practical recommendations.'], facts: ['Water balance', 'Loss reduction', 'Efficiency planning'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Water Audits',
        whyText: 'Understanding how water is being used is the first step towards managing it efficiently. A water audit can help organisations identify avoidable losses, improve monitoring, and make better use of available water resources.',
        solutionsTitle: 'Our Water Audit Services',
        solutionsIntro: 'We provide water audit services based on the nature of the facility, its water requirements, and the objectives of the assessment.',
        solutions: [
          ['Water Source Assessment', 'We identify and assess sources supplying water to the site, such as groundwater, municipal supply, surface water, or other sources, and evaluate their contribution to consumption.'],
          ['Water Balance Assessment', 'We compare water entering the facility with water used, discharged, reused, or otherwise accounted for to identify gaps and potential losses.'],
          ['Water Consumption Assessment', 'Water usage is reviewed across areas and processes using available records and field measurements to establish consumption patterns.'],
          ['Water Conservation & Reuse Assessment', 'We evaluate opportunities to reduce freshwater consumption through improved practices, recycling, reuse, rainwater harvesting, and other measures.'],
          ['Loss & Leakage Assessment', 'Distribution systems, storage facilities, pipelines, equipment, and usage points are assessed to identify leaks, unaccounted water, and avoidable loss.'],
          ['Technical Reporting & Recommendations', 'Audit findings are compiled into a structured report with observations, water-use data, identified inefficiencies, and practical recommendations.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Water Audits',
        sectorIntro: 'Water audits can be carried out across a wide range of facilities and projects, including:',
        applications: ['Infrastructure Projects', 'Warehouses & Logistics Facilities', 'Water-Intensive Industries', 'Government & Institutional Facilities', 'Industrial & Manufacturing Facilities', 'Hotels & Hospitality Facilities', 'Commercial Buildings', 'Educational Institutions', 'Hospitals & Healthcare Facilities', 'Residential Developments'],
        processLabel: 'AUDIT WORKFLOW',
        processTitle: 'Our Water Audit Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Practical water intelligence for better efficiency',
        strengths: ['Experienced hydrogeological and water management specialists', 'Site-specific water balance evaluation', 'Detailed assessment of water consumption', 'Water conservation and reuse recommendations', 'Water loss and leakage assessment', 'Accurate data collection and analysis', 'Technical reporting and documentation', 'Services across industrial, commercial, institutional, and infrastructure sectors'],
        faqs: [
          ['What is the purpose of a water audit?', 'A water audit helps understand how water is sourced, distributed, consumed, discharged, and potentially lost within a facility. It provides a basis for identifying inefficiencies and improving water management.'],
          ['Can a water audit identify water leakage?', 'Yes. Review of distribution systems, storage, pipelines, equipment, usage points, meter data and water balance discrepancies can help identify potential leakage and unaccounted water.'],
          ['Can water reuse opportunities be identified during an audit?', 'Yes. A water audit can evaluate process use, discharge quality, rainwater harvesting, recycling and reuse options suited to the facility and its operations.'],
          ['How often should a water audit be conducted?', 'The frequency depends on water use, facility changes, operational risk, monitoring systems, regulatory needs and the objectives of the organisation.']
        ]
      }
    },
    'water-flow-meter': {
      title: 'Water Flow Meter Services', category: 'MEASUREMENT', image: '../assect/our-expertise-3d-diagram.jpg',
      subtitle: 'Reliable water flow meter solutions for measuring, monitoring, and managing water movement across industrial, commercial, institutional, and infrastructure projects.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need Reliable Water Flow Measurement?',
      ctaText: "Our team can assist with flow meter selection, installation support, groundwater extraction monitoring, and water measurement solutions based on your project's requirements.",
      ctaLabel: 'Contact Our Team',
      intro: 'A water flow meter is a measuring instrument used to determine the quantity of water flowing through a pipeline or system over a specific period. Accurate flow measurement is essential for monitoring water consumption, managing distribution systems, assessing groundwater extraction, and maintaining an effective water management programme.',
      detail: 'Our team provides water flow meter solutions based on the specific requirements of each application. We assist with suitable equipment selection, installation considerations, and monitoring requirements to help clients obtain reliable flow data for water management and reporting purposes.',
      benefits: ['Accurate measurement of water flow and consumption', 'Better understanding of water usage patterns', 'Monitoring of groundwater extraction', 'Support for water audits and water balance assessments', 'Improved water resource management', 'Identification of abnormal flow or potential losses', 'Reliable data for monitoring and reporting', 'Support for regulatory and project requirements'],
      steps: ['Requirement Assessment — We understand the application, water source, pipe size, expected flow range, installation conditions, and monitoring objectives.', 'Flow Meter Selection — Based on technical requirements, we recommend a suitable flow meter type and configuration for reliable measurement.', 'Installation Planning — The installation location and pipeline arrangement are reviewed to support consistent flow measurements.', 'Installation & Commissioning — The selected flow meter is installed and checked to ensure proper operation and measurement.', 'Flow Monitoring — Once installed, the meter is used to monitor water flow and consumption through readings or connected systems.', 'Data Assessment — Flow data is reviewed to understand consumption patterns, groundwater extraction, system performance, or other requirements.'], facts: ['Flow measurement', 'Meter selection', 'Usage reporting'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Water Flow Meters',
        whyText: 'Accurate measurement helps organisations understand how much water is being supplied, extracted, consumed, or transferred through a system. Reliable flow data can also help identify unusual consumption patterns and support better control of water resources.',
        solutionsTitle: 'Our Water Flow Meter Solutions',
        solutionsIntro: 'We provide flow measurement solutions for different water monitoring and management requirements.',
        solutions: [
          ['Electromagnetic Flow Meters', 'Electromagnetic flow meters are suitable for measuring conductive liquids through pipelines and are commonly used in water supply, industrial, and groundwater applications.'],
          ['Groundwater Flow Measurement', 'Flow meters can measure water extracted from borewells and other groundwater sources, providing information for monitoring extraction and managing groundwater resources.'],
          ['Digital Water Flow Meters', 'Digital flow meters provide readings through electronic displays and can monitor water movement and consumption across different applications.'],
          ['Industrial Water Flow Measurement', 'We provide flow measurement solutions for industrial process water, utilities, cooling systems, and other applications.'],
          ['Flow Meter Installation Support', 'We provide technical guidance regarding meter selection, installation location, pipe arrangements, and other considerations for reliable measurement.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Water Flow Meters',
        sectorIntro: 'Our water flow meter solutions can be used across a range of sectors and applications, including:',
        applications: ['Hospitals & Healthcare Facilities', 'Educational Institutions', 'Infrastructure Projects', 'Government & Institutional Facilities', 'Borewell & Groundwater Monitoring', 'Manufacturing Facilities', 'Industrial Water Supply Systems', 'Commercial Buildings', 'Agricultural & Irrigation Systems', 'Residential Developments', 'Water Treatment Plants'],
        processLabel: 'MEASUREMENT WORKFLOW',
        processTitle: 'Our Water Flow Meter Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Reliable measurement for better water management',
        strengths: ['Experienced hydrogeological and water management specialists', 'Equipment selected according to project requirements', 'Flow meters for varied water monitoring applications', 'Groundwater extraction monitoring support', 'Technical guidance on flow meter selection', 'Accurate flow measurement solutions', 'Installation and commissioning assistance', 'Services across industrial, commercial, agricultural, and infrastructure sectors'],
        faqs: [
          ['What is a water flow meter used for?', 'A water flow meter measures the quantity of water passing through a pipeline over a specific period. It can monitor consumption, groundwater extraction, water supply, and process flow.'],
          ['Can a flow meter be used to measure borewell water?', 'Yes. Suitable flow meters can be installed to measure water extracted from borewells, subject to the pipe arrangement, flow range and application requirements.'],
          ['Where should a water flow meter be installed?', 'The installation location depends on the pipeline layout, flow conditions, access, pipe size, meter type and the objective of the measurement.'],
          ['Does a water flow meter require maintenance?', 'Periodic inspection, cleaning, reading checks and performance review may be required depending on water quality, installation conditions, usage and meter type.']
        ]
      }
    },
    'water-flowmeter-calibration': {
      title: 'Water Flowmeter Calibration Services', category: 'CALIBRATION', image: '../assect/proc-04-testing.jpg',
      subtitle: 'Professional water flowmeter calibration services to verify measurement accuracy, identify deviations, and ensure reliable flow data for groundwater, industrial, commercial, and water management applications.',
      heroCta: 'Request a Calibration',
      ctaTitle: 'Need Your Water Flowmeter Calibrated?',
      ctaText: 'Ensure your flow measurements remain reliable with professional flowmeter verification, calibration support, and technical documentation suited to your application.',
      ctaLabel: 'Contact Our Team',
      intro: "Water flowmeter calibration is the process of checking a flowmeter's readings against a known reference or established measurement standard to determine its accuracy. Regular calibration is important where flow measurements are used for water management, groundwater extraction monitoring, process control, water audits, or regulatory reporting.",
      detail: 'Our water flowmeter calibration services assess the flowmeter under appropriate operating conditions, compare its readings with a reference measurement, and document the results. The calibration approach is selected according to the flowmeter type, application, and required measurement range.',
      benefits: ['Verification of flowmeter measurement accuracy', 'Reliable data for water consumption monitoring', 'Identification of measurement deviations', 'Improved groundwater extraction measurement', 'Better process and water resource management', 'Support for water audits and water balance studies', 'Technical documentation of calibration results', 'Support for applicable monitoring and reporting requirements'],
      steps: ['Flowmeter & Application Assessment — We review the flowmeter type, installation, pipe size, operating conditions, measurement range, and purpose of the measurement.', 'Equipment Inspection — The flowmeter and its installation are examined to identify visible issues or conditions that may affect performance.', 'Reference Measurement — Readings are compared with an appropriate reference or established measurement method under suitable flow conditions.', 'Accuracy Assessment — Measured values are analysed to determine deviation between the flowmeter reading and reference measurement.', 'Adjustment or Corrective Action — Where adjustment is possible and required, appropriate corrective measures may be recommended or carried out.', 'Calibration Report — Calibration results, observations, measurement details, and relevant findings are documented for future reference.'], facts: ['Meter checks', 'Accuracy review', 'Calibration records'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Water Flowmeter Calibration',
        whyText: 'Reliable flow measurement depends not only on selecting the right equipment but also on ensuring that the instrument continues to provide accurate readings. Calibration helps maintain confidence in the data used for water monitoring and management.',
        solutionsTitle: 'Our Water Flowmeter Calibration Services',
        solutionsIntro: 'We provide calibration support for flowmeters used across different water monitoring and management applications.',
        solutions: [
          ['Flowmeter Accuracy Verification', 'The flowmeter is checked against an appropriate reference measurement to determine whether its readings fall within the required accuracy range.'],
          ['Groundwater Flowmeter Calibration', 'Flowmeters installed on borewell discharge lines can be assessed to verify groundwater extraction measurements and support reliable water-use monitoring.'],
          ['On-Site Flowmeter Calibration', 'Where suitable, calibration and verification can be carried out at the installation site under actual operating conditions.'],
          ['Industrial Flowmeter Calibration', 'We provide calibration support for flowmeters used in industrial water supply, process systems, utilities, and other applications.'],
          ['Calibration Reporting', 'Calibration observations and results are documented to provide a clear record of measurement performance and identified deviation.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Flowmeter Calibration',
        sectorIntro: 'Our calibration services can support flowmeters used in:',
        applications: ['Water Audits & Water Balance Studies', 'Institutional Facilities', 'Infrastructure Projects', 'Environmental Monitoring Programmes', 'Borewell & Groundwater Monitoring', 'Manufacturing Facilities', 'Industrial Water Systems', 'Water Treatment Plants', 'Agricultural & Irrigation Systems', 'Commercial Buildings'],
        processLabel: 'CALIBRATION WORKFLOW',
        processTitle: 'Our Flowmeter Calibration Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Reliable measurement verification and documentation',
        strengths: ['Experienced hydrogeological and water management specialists', 'Accurate measurement verification', 'Calibration support for different flowmeter applications', 'On-site calibration support where applicable', 'Groundwater extraction monitoring expertise', 'Calibration results and technical documentation', 'Systematic testing and assessment', 'Services across industrial, commercial, agricultural, and infrastructure sectors'],
        faqs: [
          ['What is water flowmeter calibration?', "Water flowmeter calibration is the process of comparing a flowmeter's readings with a known reference measurement to assess its accuracy and identify measurement deviation."],
          ['Why does a flowmeter need calibration?', 'Calibration helps verify measurement accuracy, identify deviations, maintain confidence in water-use data, and support monitoring, audits, management and reporting requirements.'],
          ['Can flowmeter calibration be performed on-site?', 'Where suitable, calibration and verification can be performed at the installation site so the equipment is assessed under its actual operating conditions.'],
          ['Can groundwater flowmeters be calibrated?', 'Yes. Flowmeters installed on borewell discharge lines can be assessed to support reliable groundwater extraction measurement.'],
          ['What happens if a flowmeter is found to be inaccurate?', 'The deviation can be documented and appropriate adjustment, installation review, corrective action, replacement or monitoring recommendations can be considered.'],
          ['Can calibration support water audit requirements?', 'Yes. Calibration records and verified readings can provide stronger technical support for water audits, water balances and related monitoring requirements.']
        ]
      }
    },
    'water-sample-analysis': {
      title: 'Water Sample Analysis Services', category: 'LAB ANALYSIS', image: '../assect/faq-aquifer-droplet.jpg',
      subtitle: 'To assess water quality and identify physical, chemical, and other relevant parameters for groundwater, surface water, drinking water, industrial, and environmental applications.',
      heroCta: 'Request a Consultation',
      ctaTitle: 'Need Your Water Quality Assessed?',
      ctaText: 'Our team can assist with water sample collection, laboratory analysis, result interpretation, and technical reporting for groundwater, surface water, drinking water, industrial, and environmental applications.',
      ctaLabel: 'Contact Our Team',
      intro: 'Water sample analysis involves testing water to determine its quality and suitability for a specific purpose. Water quality can vary depending on its source, surrounding geological conditions, land use, industrial activities, and other environmental factors.',
      detail: 'Our water sample analysis services support the assessment of groundwater, surface water, and other sources based on project requirements. Samples are collected or submitted for relevant testing, and the results are evaluated against applicable standards or project requirements.',
      benefits: ['Accurate assessment of water quality', 'Detection of potential water quality concerns', 'Identification of physical and chemical parameters', 'Evaluation of groundwater and surface water', 'Technical data for environmental monitoring', 'Support for drinking and domestic water assessment', 'Reliable documentation of water quality results', 'Support for water treatment and management decisions'],
      steps: ['Sample & Requirement Assessment — We understand the water source, intended use, project objectives, and parameters that need to be assessed.', 'Sample Collection — Water samples are collected from the relevant source using appropriate practices to help maintain sample integrity.', 'Laboratory Testing — Samples are tested for selected physical, chemical, and other relevant parameters according to the assessment requirements.', 'Results Evaluation — Test results are reviewed to understand water-quality characteristics and identify parameters requiring attention.', 'Comparison & Interpretation — Where applicable, results are compared with relevant standards or project-specific requirements to assess suitability.', 'Reporting — Analysis results and observations are compiled into a technical report or test report providing a clear record of the assessment.'], facts: ['Water quality', 'Lab coordination', 'Result interpretation'],
      longForm: {
        whyLabel: 'SERVICE OVERVIEW',
        whyTitle: 'Understanding Water Sample Analysis',
        whyText: "Water that looks or feels clean may still contain dissolved substances or contaminants that cannot be identified through visual inspection. Lab analysis provides measurable information about water quality and helps determine whether further treatment, monitoring, or investigation is required.",
        solutionsTitle: 'Our Water Sample Analysis Services',
        solutionsIntro: 'We provide water testing and analysis based on the source of water and the purpose of the assessment.',
        solutions: [
          ['Groundwater Sample Analysis', 'Groundwater samples from borewells and other sources can be analysed to assess chemical and physical characteristics and identify parameters affecting suitability.'],
          ['Drinking Water Quality Analysis', 'Water intended for drinking or domestic use can be tested for relevant quality parameters against applicable drinking water requirements.'],
          ['Surface Water Analysis', 'Samples from rivers, lakes, ponds, reservoirs, and other surface sources can be assessed to understand quality and environmental concerns.'],
          ['Environmental Water Testing', 'Water sample analysis can support environmental investigations and monitoring programmes where changes in quality need to be identified and documented.'],
          ['Industrial Water Analysis', 'Industrial water samples can be analysed based on process requirements, water source, and parameters relevant to facility operations.'],
          ['Water Quality Reporting', 'Test results are compiled and interpreted to provide a clear record of parameters analysed, observed values, and relevant findings.']
        ],
        sectorLabel: 'APPLICATIONS',
        sectorTitle: 'Applications of Water Sample Analysis',
        sectorIntro: 'Our water sample analysis services can support:',
        applications: ['Water Treatment Planning', 'Water Resource Management', 'Construction & Infrastructure Projects', 'Institutional & Commercial Facilities', 'Groundwater Quality Assessment', 'Drinking & Domestic Water Assessment', 'Borewell Water Testing', 'Industrial Water Monitoring', 'Environmental Investigations', 'Surface Water Studies'],
        processLabel: 'TESTING WORKFLOW',
        processTitle: 'Our Water Sample Analysis Process',
        strengthsLabel: 'WHY WORK WITH US?',
        strengthsTitle: 'Clear water-quality evidence for better decisions',
        strengths: ['Experienced hydrogeological and environmental specialists', 'Appropriate sample collection practices', 'Water testing for varied applications', 'Assessment of relevant water quality parameters', 'Technical reporting and documentation', 'Accurate data analysis and interpretation', 'Support for groundwater and environmental studies', 'Services across industrial, commercial, institutional, and infrastructure sectors'],
        faqs: [
          ['What is water sample analysis?', 'Water sample analysis is the testing of a water sample to determine its physical, chemical, and other relevant quality characteristics and assess suitability for a particular purpose.'],
          ['Which parameters are tested in a water sample?', 'Parameters depend on the water source, intended use, project objectives and applicable requirements, and may include physical, chemical and other relevant quality indicators.'],
          ['Can borewell water be tested for drinking purposes?', 'Yes. Borewell water can be sampled and tested for parameters relevant to drinking or domestic use, with results interpreted against applicable requirements.'],
          ['How long does water sample analysis take?', 'The timeline depends on the parameters selected, sample handling, laboratory requirements, testing method and reporting scope.']
        ]
      }
    },
    'open-well-solutions-detail': {
      title: 'Open Well Solutions', category: 'OPEN WELL', image: '../assect/service-open-well-generated.png',
      subtitle: 'Assessment, structural design and management of open wells for reliable and continuous water supply.',
      intro: 'We assess open-well condition, recharge setting and water demand to plan practical improvement or management measures.',
      detail: 'The service can support structural lining, cleaning, yield improvement and safer operation of traditional open wells.',
      benefits: ['Open-well condition assessment', 'Yield and recharge understanding', 'Improvement planning'],
      steps: ['Inspect structure, catchment and water behaviour', 'Identify repair and improvement needs', 'Prepare a safe, maintainable solution'], facts: ['Well assessment', 'Yield improvement', 'Safe operation']
    },
    'borewell-revival-detail': {
      title: 'Revival of Dry or Failed Bore', category: 'REJUVENATION', image: '../assect/service-revival-bore-generated.png',
      subtitle: 'Technical hydro-fracturing, flushing and diagnostic revival techniques for dried or low-yield borewells.',
      intro: 'Before abandoning a dry or failed bore, we investigate the likely cause and identify whether revival is technically practical.',
      detail: 'The work may include diagnostics, cleaning, flushing and suitable revival recommendations based on bore condition and groundwater setting.',
      benefits: ['Failure-cause investigation', 'Revival feasibility assessment', 'Cleaning and yield improvement planning'],
      steps: ['Inspect bore history and current condition', 'Identify blockage, damage or water-level issues', 'Recommend and document the revival approach'], facts: ['Bore diagnostics', 'Flushing support', 'Yield revival']
    }
  };

  const key = document.body.dataset.service;
  const service = pageData[key];
  if (!service) return;

  if (!document.querySelector('link[href*="font-awesome"]')) {
    const iconStylesheet = document.createElement('link');
    iconStylesheet.rel = 'stylesheet';
    iconStylesheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css';
    document.head.appendChild(iconStylesheet);
  }

  const iconFallbackStyles = document.createElement('style');
  iconFallbackStyles.textContent = `
    [data-service].service-icons-fallback .fa-solid,
    [data-service].service-icons-fallback .fa-regular,
    [data-service].service-icons-fallback .fa-brands {
      font-family: "Segoe UI Symbol", "Arial Unicode MS", Arial, sans-serif !important;
      font-style: normal;
      font-weight: 700;
    }
    [data-service].service-icons-fallback .fa-location-dot::before { content: "⌖" !important; }
    [data-service].service-icons-fallback .fa-envelope::before { content: "✉" !important; }
    [data-service].service-icons-fallback .fa-phone-volume::before { content: "☎" !important; }
    [data-service].service-icons-fallback .fa-linkedin-in::before { content: "in" !important; }
    [data-service].service-icons-fallback .fa-facebook-f::before { content: "f" !important; }
    [data-service].service-icons-fallback .fa-youtube::before { content: "▶" !important; }
    [data-service].service-icons-fallback .fa-globe::before { content: "◎" !important; }
    [data-service].service-icons-fallback .fa-chevron-right::before { content: "›" !important; }
    [data-service].service-icons-fallback .fa-chevron-down::before { content: "⌄" !important; }
    [data-service].service-icons-fallback .fa-arrow-right::before { content: "→" !important; }
    [data-service].service-icons-fallback .fa-circle-check::before { content: "✓" !important; }
    [data-service].service-icons-fallback .fa-shield-halved::before { content: "◆" !important; }
    [data-service].service-icons-fallback .fa-file-signature::before { content: "✎" !important; }
    [data-service].service-icons-fallback .fa-droplet::before { content: "♦" !important; }
    [data-service].service-icons-fallback .fa-layer-group::before { content: "▦" !important; }
    [data-service].service-icons-fallback .fa-water::before { content: "≋" !important; }
    [data-service].service-icons-fallback .fa-file-shield::before { content: "▣" !important; }
    [data-service].service-icons-fallback .fa-broom::before { content: "⌁" !important; }
    [data-service].service-icons-fallback .fa-bore-hole::before { content: "◎" !important; }
    [data-service].service-icons-fallback .fa-leaf::before { content: "♣" !important; }
    [data-service].service-icons-fallback .fa-bullseye::before { content: "◉" !important; }
    [data-service].service-icons-fallback .fa-gears::before { content: "⚙" !important; }
    [data-service].service-icons-fallback .fa-user-tie::before { content: "♟" !important; }
    [data-service].service-icons-fallback .fa-file-lines::before { content: "▤" !important; }
    [data-service].service-icons-fallback .fa-compass-drafting::before { content: "⊕" !important; }
    [data-service].service-icons-fallback .fa-chart-line::before { content: "▥" !important; }
    [data-service].service-icons-fallback .fa-ruler-vertical::before { content: "↕" !important; }
    [data-service].service-icons-fallback .fa-gauge-high::before { content: "◉" !important; }
    [data-service].service-icons-fallback .fa-cloud-showers-water::before { content: "☁" !important; }
    [data-service].service-icons-fallback .fa-sliders::before { content: "☷" !important; }
    [data-service].service-icons-fallback .fa-flask::before { content: "⚗" !important; }
    [data-service].service-icons-fallback .fa-house-flood-water::before { content: "⌂" !important; }
    [data-service].service-icons-fallback .fa-hand-holding-droplet::before { content: "♨" !important; }
    [data-service].service-icons-fallback .fa-list-check::before { content: "☷" !important; }
    [data-service].service-icons-fallback .fa-clock::before { content: "◷" !important; }
  `;
  document.head.appendChild(iconFallbackStyles);
  document.body.classList.add('service-icons-fallback');

  const list = (items, className) => items.map((item, index) => `<div class="${className}"><span>${String(index + 1).padStart(2, '0')}</span><p>${item}</p></div>`).join('');
  const ticks = (items) => items.map(item => `<li><i class="fa-solid fa-circle-check"></i>${item}</li>`).join('');
  const richSteps = (items) => items.map((step, index) => {
    const parts = step.split(' — ');
    const title = parts.shift();
    return `<article class="dedicated-service-rich-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${parts.join(' — ')}</p></div></article>`;
  }).join('');
  const serviceMenu = [
    ['services.html', 'fa-list-check', 'All Services'],
    ['gpr-survey.html', 'fa-water', 'GPR Survey'],
    ['cgwa-application.html', 'fa-file-shield', 'CGWA Application'],
    ['cleaning-recharge-well.html', 'fa-broom', 'Cleaning Of Recharge Well'],
    ['drilling-borewell.html', 'fa-bore-hole', 'Drilling Borewell'],
    ['environmental-remediation.html', 'fa-leaf', 'Environmental Remediation'],
    ['geo-technical-work.html', 'fa-compass-drafting', 'Geo Technical Work'],
    ['impact-assessment-report.html', 'fa-chart-line', 'Impact Assessment Report'],
    ['piezometer-supplier.html', 'fa-ruler-vertical', 'Piezometer Supplier'],
    ['pump-test.html', 'fa-gauge-high', 'Pump Test'],
    ['rain-water-harvesting.html', 'fa-cloud-showers-water', 'Rain Water Harvesting'],
    ['water-audit.html', 'fa-list-check', 'Water Audit'],
    ['water-flow-meter.html', 'fa-water', 'Water Flow Meter'],
    ['water-flowmeter-calibration.html', 'fa-sliders', 'Water Flowmeter Calibration'],
    ['water-sample-analysis.html', 'fa-flask', 'Water Sample Analysis'],
    ['flood-analysis.html', 'fa-house-flood-water', 'Flood Analysis'],
    ['water-credit.html', 'fa-hand-holding-droplet', 'Water Credit'],
    ['hydrology.html', 'fa-water', 'Hydrology'],
    ['groundwater-investigation-stem.html', 'fa-layer-group', 'Groundwater & Investigation (sTEM)']
  ].map(([href, icon, label]) => `<li><a href="../services/${href}"><i class="fa-solid ${icon}"></i> ${label}</a></li>`).join('');

  const richContent = service.longForm ? `
    <div class="dedicated-service-rich-content">
      <div class="dedicated-service-rich-intro">
        <span class="dedicated-service-eyebrow">${service.longForm.whyLabel || 'WHY GPR?'}</span>
        <h2>${service.longForm.whyTitle}</h2>
        <p>${service.longForm.whyText}</p>
      </div>

      <div class="dedicated-service-rich-section">
        <span class="dedicated-service-eyebrow">OUR CAPABILITIES</span>
        <h2>${service.longForm.solutionsTitle || 'Our GPR Survey Solutions'}</h2>
        <p>${service.longForm.solutionsIntro || 'We provide Ground Penetrating Radar surveys for industrial, commercial, institutional, and infrastructure projects.'}</p>
        <div class="dedicated-service-solution-grid">${service.longForm.solutions.map(([title, text], index) => `<article class="dedicated-service-solution-card"><span>0${index + 1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div>
      </div>

      <div class="dedicated-service-rich-section">
        <span class="dedicated-service-eyebrow">${service.longForm.sectorLabel || 'SECTORS WE SUPPORT'}</span>
        <h2>${service.longForm.sectorTitle || 'Applications Across Industries'}</h2>
        <p>${service.longForm.sectorIntro || 'Our GPR surveys support projects across multiple sectors, including:'}</p>
        <div class="dedicated-service-application-grid">${service.longForm.applications.map(application => `<span><i class="fa-solid fa-circle-check"></i>${application}</span>`).join('')}</div>
      </div>

      <div class="dedicated-service-rich-process">
        <span class="dedicated-service-eyebrow">${service.longForm.processLabel || 'FIELDWORK PROCESS'}</span>
        <h2>${service.longForm.processTitle || 'Our Survey Process'}</h2>
        <div class="dedicated-service-rich-step-grid">${richSteps(service.steps)}</div>
      </div>

      <div class="dedicated-service-rich-section dedicated-service-strengths">
        <span class="dedicated-service-eyebrow">${service.longForm.strengthsLabel || 'WHY WORK WITH US?'}</span>
        <h2>${service.longForm.strengthsTitle || 'Reliable fieldwork and technical interpretation'}</h2>
        <div class="dedicated-service-strength-grid">${service.longForm.strengths.map(strength => `<span><i class="fa-solid fa-circle-check"></i>${strength}</span>`).join('')}</div>
      </div>

      <div class="dedicated-service-rich-section dedicated-service-faq-section">
        <span class="dedicated-service-eyebrow">FAQ</span>
        <h2>${service.longForm.faqTitle || 'Frequently Asked Questions'}</h2>
        <div class="dedicated-service-faq-list">${service.longForm.faqs.map(([question, answer]) => `<details><summary>${question}<i class="fa-solid fa-chevron-down"></i></summary><p>${answer}</p></details>`).join('')}</div>
      </div>
    </div>` : '';

  const gprMain = service.layout === 'gpr' ? `
    <section class="dedicated-service-hero service-detail-banner" style="background-image: url('${service.heroImage || service.image}')">
      <div class="dedicated-service-hero-overlay"></div>
      <div class="container dedicated-service-hero-inner">
        <div class="contact-breadcrumb-wrap"><a href="../index.html">Home</a><i class="fa-solid fa-chevron-right"></i><a href="../services.html">Services</a><i class="fa-solid fa-chevron-right"></i><span class="bc-current">${service.title}</span></div>
        <div class="service-detail-banner-layout"><div class="service-detail-banner-copy"><h1>${service.title}</h1><p>${service.subtitle}</p></div></div>
      </div>
    </section>

    <section class="dedicated-service-section shared-service-overview-section">
      <div class="container dedicated-service-container">
        <div class="dedicated-service-overview shared-service-overview">
          <div class="dedicated-service-image-wrap"><span class="dedicated-service-image-accent"></span><img src="${service.image}" alt="${service.title}"><span class="dedicated-service-image-badge"><i class="fa-solid fa-droplet"></i> ${service.category}</span></div>
          <div class="dedicated-service-copy"><span class="dedicated-service-eyebrow">BHARAT BHUJAL TECH SOLUTION</span><h2>${service.overviewTitle || `Practical expertise for <span>${service.title}</span>`}</h2><div class="dedicated-service-lead-card"><p class="dedicated-service-lead">${service.overviewLead || service.intro}</p></div><p class="dedicated-service-detail">${service.overviewSecondary || service.detail}</p><ul class="dedicated-service-checklist">${ticks(['Identify underground utilities', 'Locate voids and cavities', 'Map subsurface structures', 'Support safe construction'])}</ul></div>
        </div>
      </div>
    </section>

    <section class="gpr-redesign-section gpr-redesign-benefits"><div class="container gpr-redesign-container"><div class="gpr-redesign-benefits-grid"><div class="gpr-redesign-benefits-intro"><span class="gpr-redesign-kicker">KEY BENEFITS</span><h2>Why Choose Our<br>GPR Survey Services?</h2><p>${service.longForm.whyText}</p></div><div class="gpr-redesign-benefit-list">${service.benefits.map((benefit, index) => { const icons = ['fa-shield-halved', 'fa-ban', 'fa-building', 'fa-crosshairs', 'fa-arrows-rotate', 'fa-circle-nodes', 'fa-gauge-high', 'fa-road']; return `<div class="gpr-redesign-benefit"><i class="fa-solid ${icons[index] || 'fa-circle-check'}"></i><span><b>${benefit}</b><small>Reliable support for safer, better-planned site investigations.</small></span></div>`; }).join('')}</div></div></div></section>

    <section class="gpr-workflow-section"><div class="container gpr-redesign-container"><div class="gpr-workflow-panel"><div class="gpr-workflow-pill"><i class="fa-solid fa-circle"></i> EXECUTION WORKFLOW</div><h2>From Field Investigation to <span>Actionable Insights</span></h2><div class="gpr-workflow-grid">${service.steps.map((step, index) => { const parts = step.split(' — '); const images = ['../assect/journey-survey-v2.png', '../assect/journey-analysis-v2.png', '../assect/journey-implementation-v2.png', '../assect/journey-monitoring-v2.png', '../assect/journey-impact-v2.png']; return `<article class="gpr-workflow-card"><div class="gpr-workflow-orb"><img src="${images[index]}" alt="${parts[0]}"><b>0${index + 1}</b></div><h3>${['Site Assessment & Planning', 'Field Geophysical Survey', '2D/3D Data Modeling', 'Hydrogeological Analysis', 'Actionable Report'][index]}</h3><p>${['Study geology, terrain, existing wells, satellite data, and site requirements.', 'Conduct ERT, VES, VLF, and multi-electrode resistivity investigations on site.', 'Convert raw field resistivity data into high-resolution subsurface tomograms.', 'Identify aquifer boundaries, fracture paths, salinity, and water table levels.', 'Deliver certified GPS coordinates, recommended depths, and drilling instructions.'][index]}</p><span class="gpr-workflow-underline"></span></article>`; }).join('')}</div></div></div></section>

    <section class="gpr-redesign-section gpr-redesign-technical"><div class="container gpr-redesign-container"><div class="gpr-redesign-technical-grid"><div class="gpr-redesign-technical-copy"><span class="gpr-redesign-kicker">OUR CAPABILITIES</span><h2>Our GPR Survey<br>Solutions</h2><p>We provide Ground Penetrating Radar surveys for industrial, commercial, institutional and infrastructure projects.</p><ul>${service.longForm.solutions.map(([title, text]) => `<li><i class="fa-solid fa-circle-check"></i><span><b>${title}</b><small>${text}</small></span></li>`).join('')}</ul><div class="gpr-redesign-tech-stats"><span><b>Non-destructive</b><small>Investigation</small></span><span><b>High-resolution</b><small>Subsurface mapping</small></span><span><b>Reliable</b><small>Technical reporting</small></span></div></div><div class="gpr-redesign-technical-visual"><img src="../assect/gpr-technical-capabilities-generated.png" alt="Advanced GPR equipment and subsurface data interpretation"><div class="gpr-redesign-visual-labels"><span>Buried Layers</span><span>Utilities</span><span>Voids / Cavities</span><span>Natural Soil</span></div></div></div></div></section>

    <section class="gpr-redesign-section gpr-redesign-industries"><div class="container gpr-redesign-container"><span class="gpr-redesign-kicker">WHERE WE HELP</span><h2>Applications Across Industries</h2><p class="gpr-industries-intro">Our GPR surveys support projects across multiple sectors.</p><div class="gpr-redesign-industry-grid gpr-application-grid">${service.longForm.applications.map(application => `<article><div><i class="fa-solid fa-circle-check"></i><h3>${application}</h3><p>Ground investigation and subsurface mapping support.</p></div></article>`).join('')}</div></div></section>

    <section class="gpr-redesign-section gpr-redesign-case-study"><div class="container gpr-redesign-container"><div class="gpr-redesign-case-grid"><img src="${service.image}" alt="Ground Penetrating Radar survey"><div><span class="gpr-redesign-kicker">WHY WORK WITH US?</span><h2>Reliable fieldwork and technical interpretation</h2><p>Our team combines experienced hydrogeologists, geophysical specialists, advanced equipment and clear technical reporting.</p><div class="gpr-redesign-case-facts">${service.longForm.strengths.map(strength => `<span><i class="fa-solid fa-circle-check"></i><b>${strength}</b><small>Part of our GPR survey delivery standard.</small></span>`).join('')}</div></div></div></div></section>

    <section class="gpr-redesign-section gpr-redesign-faq"><div class="container gpr-redesign-container"><div class="gpr-redesign-faq-grid"><div><span class="gpr-redesign-kicker">FAQ</span><h2>Common Questions<br>About GPR Surveys</h2><p>Find answers to the most common questions about our Ground Penetrating Radar (GPR) survey services.</p><a class="gpr-redesign-btn gpr-redesign-btn-primary" href="#gpr-faq-list">View All FAQs <i class="fa-solid fa-arrow-right"></i></a></div><div class="gpr-redesign-faq-list" id="gpr-faq-list">${service.longForm.faqs.map(([question, answer]) => `<details><summary>${question}<i class="fa-solid fa-plus"></i></summary><p>${answer}</p></details>`).join('')}</div></div></div></section>

    <section class="gpr-redesign-section gpr-redesign-related"><div class="container gpr-redesign-container"><div class="gpr-redesign-related-heading"><div><span class="gpr-redesign-kicker">RELATED SERVICES</span><h2>Explore Other Services</h2></div><a href="../services.html">View All Services <i class="fa-solid fa-arrow-right"></i></a></div><div class="gpr-redesign-related-grid">${[['../assect/srv-geophysical.jpg', 'GeoPhysical Survey', '3D Aquifer Mapping', 'geo-technical-work.html'], ['../assect/service-production-well-generated.png', 'Drilling Services', 'Production Well', 'drilling-borewell.html'], ['../assect/journey-analysis-v2.png', 'Groundwater', 'Hydrogeology Study', 'hydrology.html'], ['../assect/service-cgwa-consultancy-generated.png', 'CGWA Consultancy', '& NOC Support', 'cgwa-application.html']].map(([image, title, text, href], index) => `<a href="${href}" class="gpr-redesign-related-card"><img src="${image}" alt="${title}"><span>0${index + 1}</span><b>${title}<br>${text}</b><i class="fa-solid fa-arrow-right"></i></a>`).join('')}</div></div></section>

    <section class="gpr-redesign-cta"><div class="gpr-redesign-cta-overlay"></div><div class="container gpr-redesign-container"><div><span class="gpr-redesign-kicker">LET'S BUILD A SAFER TOMORROW</span><h2>Need a Professional GPR Survey?</h2><p>Talk to our experts and get accurate subsurface insights for your project.</p></div><div class="gpr-redesign-actions"><a class="gpr-redesign-btn gpr-redesign-btn-primary" href="../contact.html">Get Expert Consultation <i class="fa-solid fa-arrow-right"></i></a><a class="gpr-redesign-btn gpr-redesign-btn-outline" href="../contact.html"><i class="fa-regular fa-file-lines"></i> Download Brochure</a></div></div></section>
  ` : '';

  document.title = `${service.title} | Bharat Bhujal Tech Pvt. Ltd.`;
  document.body.innerHTML = `
    <div class="top-bar">
      <div class="container top-bar-inner">
        <div class="top-bar-left">
          <div class="top-info-item"><i class="fa-solid fa-location-dot"></i><span>301, SDF Complex, Akshar Chowk, Vadodara, Gujarat, India</span></div>
          <a href="mailto:info@bharatbhujal.com" class="top-info-item"><i class="fa-regular fa-envelope"></i><span>info@bharatbhujal.com</span></a>
          <a href="tel:+919826377611" class="top-info-item"><i class="fa-solid fa-phone-volume"></i><span>+91 98263 77611</span></a>
        </div>
        <div class="top-bar-right"><div class="top-social-group"><a href="#" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a><a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a></div></div>
      </div>
    </div>

    <header class="main-header" id="navbar">
      <div class="container navbar-container">
        <a href="../index.html" class="brand-logo"><img src="../assect/logo.png" alt="Bharat Bhujal Tech Pvt. Ltd." class="site-main-logo"></a>
        <nav class="nav-menu" id="navMenu">
          <ul class="nav-list">
            <li class="nav-item"><a href="../index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="../about.html" class="nav-link">About Us</a></li>
            <li class="nav-item has-dropdown"><a href="../services.html" class="nav-link active">Services <i class="fa-solid fa-chevron-down nav-arrow"></i></a><ul class="dropdown-list">${serviceMenu}</ul></li>
            <li class="nav-item"><a href="../knowledge.html" class="nav-link">Knowledge Center</a></li>
            <li class="nav-item"><a href="../contact.html" class="nav-link">Contact Us</a></li>
          </ul>
        </nav>
        <div class="nav-right-actions"><a href="../contact.html" class="btn-inquiry-pill"><i class="fa-solid fa-file-signature inquiry-icon"></i><span>Free Inquiry</span><i class="fa-solid fa-arrow-right arrow-icon"></i></a><button class="mobile-toggle" id="mobileMenuToggle" aria-label="Toggle Menu"><span class="bar"></span><span class="bar"></span><span class="bar"></span></button></div>
      </div>
    </header>

    <main>
      ${service.layout === 'gpr' ? gprMain : `
      <section class="dedicated-service-hero service-detail-banner" style="background-image: url('${service.image}')">
        <div class="dedicated-service-hero-overlay"></div>
        <div class="container dedicated-service-hero-inner">
          <div class="contact-breadcrumb-wrap"><a href="../index.html">Home</a><i class="fa-solid fa-chevron-right"></i><a href="../services.html">Services</a><i class="fa-solid fa-chevron-right"></i><span class="bc-current">${service.title}</span></div>
          <div class="service-detail-banner-layout"><div class="service-detail-banner-copy"><h1>${service.title}</h1><p>${service.subtitle}</p></div></div>
        </div>
      </section>

      <section class="dedicated-service-section">
        <div class="container dedicated-service-container">
          <div class="dedicated-service-overview">
            <div class="dedicated-service-image-wrap"><span class="dedicated-service-image-accent"></span><img src="${service.image}" alt="${service.title}"><span class="dedicated-service-image-badge"><i class="fa-solid fa-droplet"></i> ${service.category}</span></div>
            <div class="dedicated-service-copy"><span class="dedicated-service-eyebrow">BHARAT BHUJAL TECH SOLUTION</span><h2>${service.overviewTitle || `Practical expertise for <span>${service.title}</span>`}</h2><div class="dedicated-service-lead-card"><p class="dedicated-service-lead">${service.intro}</p></div><p class="dedicated-service-detail">${service.detail}</p><ul class="dedicated-service-checklist">${ticks(service.benefits)}</ul></div>
          </div>

          ${richContent}

          ${service.longForm ? '' : `<div class="dedicated-service-facts"><div><span class="dedicated-service-eyebrow">SERVICE FOCUS</span><h2>What this service delivers</h2></div><div class="dedicated-service-fact-grid">${service.facts.map((fact, index) => `<div class="dedicated-service-fact"><span>0${index + 1}</span><i class="fa-solid fa-layer-group"></i><strong>${fact}</strong></div>`).join('')}</div></div>`}

          ${service.longForm ? '' : `<div class="dedicated-service-process"><div class="dedicated-service-process-heading"><span class="dedicated-service-eyebrow">OUR APPROACH</span><h2>A clear path from investigation to action</h2></div><div class="dedicated-service-step-grid">${list(service.steps, 'dedicated-service-step')}</div></div>`}

          <div class="dedicated-service-bottom-cta"><div><span class="dedicated-service-eyebrow">READY TO DISCUSS YOUR SITE?</span><h2>${service.ctaTitle || 'Get a practical recommendation from our team.'}</h2>${service.ctaText ? `<p>${service.ctaText}</p>` : ''}</div><a href="../contact.html" class="btn-white-contact-pill">${service.ctaLabel || 'Contact Our Team'} <i class="fa-solid fa-arrow-right"></i></a></div>
        </div>
      </section>`}
    </main>

    <footer class="master-footer" id="contact"><div class="footer-bg-landscape"><div class="mountain-backdrop-art"></div><div class="footer-water-drop-art"><div class="drop-column"></div><div class="drop-ripple-circle dr-1"></div><div class="drop-ripple-circle dr-2"></div><div class="drop-ripple-circle dr-3"></div></div></div><div class="container footer-main-container"><div class="footer-grid-5col"><div class="footer-col col-brand"><a href="../index.html" class="footer-logo"><img src="../assect/logo.png" alt="Bharat Bhujal Tech Pvt. Ltd." class="footer-logo-img"></a><p class="brand-mission-text">Your trusted partner for groundwater exploration, precision borewell drilling, and sustainable water resource management across India.</p><div class="footer-trust-badge"><i class="fa-solid fa-shield-halved"></i><span>ISO 9001:2015 &amp; CGWA Compliant</span></div></div><div class="footer-col col-quicklinks"><h4 class="footer-heading">Quick Links<span class="heading-accent-line"></span></h4><ul class="footer-nav-list"><li><a href="../index.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Home</span></a></li><li><a href="../about.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>About Us</span></a></li><li><a href="../services.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>All Services</span></a></li><li><a href="../contact.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Contact Us</span></a></li></ul></div><div class="footer-col col-contact"><h4 class="footer-heading">Get in Touch<span class="heading-accent-line"></span></h4><div class="footer-contact-items"><a href="tel:+919826377611" class="f-contact-card f-contact-link"><div class="f-contact-icon-box pulse-blue"><i class="fa-solid fa-phone-volume"></i></div><div class="f-contact-details"><span class="f-contact-label">Technical Inquiry</span><span class="f-contact-val highlight-val">+91 98263 77611</span></div></a><a href="mailto:info@bharatbhujal.com" class="f-contact-card f-contact-link"><div class="f-contact-icon-box"><i class="fa-regular fa-envelope"></i></div><div class="f-contact-details"><span class="f-contact-label">Email Consultation</span><span class="f-contact-val highlight-val">info@bharatbhujal.com</span></div></a></div></div></div></div><div class="footer-bottom-strip"><div class="container footer-bottom-inner"><div class="copyright-text">&copy; 2026 Bharat Bhujal Tech Pvt. Ltd. All Rights Reserved.</div><div class="made-in-tag"><span>Designed with <span class="heart-blue">&#10084;</span> in India</span></div></div></div></footer>
  `;

  const homepageFooter = `
    <footer class="master-footer" id="contact">
      <div class="footer-bg-landscape">
        <div class="mountain-backdrop-art"></div>
        <svg class="footer-sine-waves-svg" viewBox="0 0 600 200" fill="none"><path d="M 0,160 C 150,190 300,100 450,140 C 520,160 580,130 600,120" stroke="rgba(56, 189, 248, 0.25)" stroke-width="2"/><path d="M 0,140 C 180,180 320,80 480,120 C 540,140 580,110 600,100" stroke="rgba(56, 189, 248, 0.35)" stroke-width="2.5"/><path d="M 0,120 C 200,160 340,60 500,100 C 560,120 590,90 600,80" stroke="rgba(6, 182, 212, 0.45)" stroke-width="2"/></svg>
        <div class="footer-water-drop-art"><div class="drop-column"></div><div class="drop-ripple-circle dr-1"></div><div class="drop-ripple-circle dr-2"></div><div class="drop-ripple-circle dr-3"></div></div>
      </div>
      <div class="container footer-main-container">
        <div class="footer-grid-5col">
          <div class="footer-col col-brand">
            <a href="../index.html" class="footer-logo"><img src="../assect/logo.png" alt="Bharat Bhujal Tech Pvt. Ltd." class="footer-logo-img"></a>
            <p class="brand-mission-text">Your trusted partner for groundwater exploration, precision borewell drilling, and sustainable water resource management across India.</p>
            <div class="footer-trust-badge"><i class="fa-solid fa-shield-halved"></i><span>ISO 9001:2015 &amp; CGWA Compliant</span></div>
            <div class="footer-social-circles"><a href="#" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a><a href="#" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook-f"></i></a><a href="#" aria-label="YouTube" title="YouTube"><i class="fa-brands fa-youtube"></i></a><a href="#" aria-label="Website" title="Website"><i class="fa-solid fa-globe"></i></a></div>
          </div>
          <div class="footer-col col-quicklinks">
            <h4 class="footer-heading">Quick Links<span class="heading-accent-line"></span></h4>
            <ul class="footer-nav-list"><li><a href="../index.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Home</span></a></li><li><a href="../about.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>About Us</span></a></li><li><a href="../services.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Services &amp; Solutions</span></a></li><li><a href="../knowledge.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Knowledge Center</span></a></li><li><a href="../contact.html"><i class="fa-solid fa-chevron-right f-link-arrow"></i><span>Contact Us</span></a></li></ul>
          </div>
          <div class="footer-col col-services">
            <h4 class="footer-heading">Our Services<span class="heading-accent-line"></span></h4>
            <ul class="footer-services-list"><li><a href="gpr-survey.html"><span class="f-service-badge"><i class="fa-solid fa-water"></i></span><span class="f-service-title">GPR Survey</span></a></li><li><a href="drilling-borewell.html"><span class="f-service-badge"><i class="fa-solid fa-bore-hole"></i></span><span class="f-service-title">Drilling Borewell</span></a></li><li><a href="flood-analysis.html"><span class="f-service-badge"><i class="fa-solid fa-house-flood-water"></i></span><span class="f-service-title">Flood Analysis</span></a></li><li><a href="water-credit.html"><span class="f-service-badge"><i class="fa-solid fa-hand-holding-droplet"></i></span><span class="f-service-title">Water Credit</span></a></li><li><a href="hydrology.html"><span class="f-service-badge"><i class="fa-solid fa-water"></i></span><span class="f-service-title">Hydrology</span></a></li><li><a href="groundwater-investigation-stem.html"><span class="f-service-badge"><i class="fa-solid fa-layer-group"></i></span><span class="f-service-title">Groundwater Investigation</span></a></li></ul>
          </div>
          <div class="footer-col col-contact">
            <h4 class="footer-heading">Get in Touch<span class="heading-accent-line"></span></h4>
            <div class="footer-contact-items"><div class="f-contact-card"><div class="f-contact-icon-box"><i class="fa-solid fa-location-dot"></i></div><div class="f-contact-details"><span class="f-contact-label">Corporate Office</span><span class="f-contact-val">301, SDF Complex, Nr. Pragati Building, Akshar Chowk, Vadodara, Gujarat, India</span></div></div><a href="tel:+919826377611" class="f-contact-card f-contact-link"><div class="f-contact-icon-box pulse-blue"><i class="fa-solid fa-phone-volume"></i></div><div class="f-contact-details"><span class="f-contact-label">Direct Technical Inquiry</span><span class="f-contact-val highlight-val">+91 98263 77611</span></div><span class="f-card-action-chip">Call</span></a><a href="mailto:info@bharatbhujal.com" class="f-contact-card f-contact-link"><div class="f-contact-icon-box"><i class="fa-regular fa-envelope"></i></div><div class="f-contact-details"><span class="f-contact-label">Email Consultation</span><span class="f-contact-val highlight-val">info@bharatbhujal.com</span></div></a><div class="f-contact-card"><div class="f-contact-icon-box"><i class="fa-regular fa-clock"></i></div><div class="f-contact-details"><span class="f-contact-label">Working Hours</span><span class="f-contact-val">Mon - Sat : 9:00 AM - 6:00 PM</span></div></div></div>
          </div>
        </div>
      </div>
      <div class="footer-bottom-strip"><div class="container footer-bottom-inner"><div class="copyright-text">&copy; 2026 Bharat Bhujal Tech Pvt. Ltd. All Rights Reserved.</div><div class="legal-links"><a href="#">Privacy Policy</a><span class="sep">|</span><a href="#">Terms &amp; Conditions</a><span class="sep">|</span><a href="#">Sitemap</a></div><div class="made-in-tag"><span>Designed with <span class="heart-blue">&#10084;</span> in India</span></div></div></div>
    </footer>`;
  const currentFooter = document.querySelector('.master-footer');
  if (currentFooter) currentFooter.outerHTML = homepageFooter;
})();
/* <div class="footer-col col-contact">
  <h4 class="footer-heading">Get in Touch<span class="heading-accent-line"></span></h4>
  <div class="footer-contact-items"><div class="f-contact-card"><div class="f-contact-icon-box"><i class="fa-solid fa-location-dot"></i></div><div class="f-contact-details"><span class="f-contact-label">Corporate Office</span><span class="f-contact-val">301, SDF Complex, Nr. Pragati Building, Akshar Chowk, Vadodara, Gujarat, India</span></div></div><a href="tel:+919826377611" class="f-contact-card f-contact-link"><div class="f-contact-icon-box pulse-blue"><i class="fa-solid fa-phone-volume"></i></div><div class="f-contact-details"><span class="f-contact-label">Direct Technical Inquiry</span><span class="f-contact-val highlight-val">+91 98263 77611</span></div><span class="f-card-action-chip">Call</span></a><a href="mailto:info@bharatbhujal.com" class="f-contact-card f-contact-link"><div class="f-contact-icon-box"><i class="fa-regular fa-envelope"></i></div><div class="f-contact-details"><span class="f-contact-label">Email Consultation</span><span class="f-contact-val highlight-val">info@bharatbhujal.com</span></div></a><div class="f-contact-card"><div class="f-contact-icon-box"><i class="fa-regular fa-clock"></i></div><div class="f-contact-details"><span class="f-contact-label">Working Hours</span><span class="f-contact-val">Mon - Sat : 9:00 AM - 6:00 PM</span></div></div></div>
</div>
        </div >
      </div >
  <div class="footer-bottom-strip"><div class="container footer-bottom-inner"><div class="copyright-text">&copy; 2026 Bharat Bhujal Tech Pvt. Ltd. All Rights Reserved.</div><div class="legal-links"><a href="#">Privacy Policy</a><span class="sep">|</span><a href="#">Terms &amp; Conditions</a><span class="sep">|</span><a href="#">Sitemap</a></div><div class="made-in-tag"><span>Designed with <span class="heart-blue">&#10084;</span> in India</span></div></div></div>
    </footer > `;
*/
/* const currentFooter = document.querySelector('.master-footer');
  if (currentFooter) currentFooter.outerHTML = homepageFooter;
})(); */
