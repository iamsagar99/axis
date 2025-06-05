// Mock API functions to simulate fetching data from a backend

// Services
export const fetchServices = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "AI Solutions",
      slug: "ai-solutions",
      short_description: "Cutting-edge artificial intelligence solutions for business automation and insights.",
      description: "Our AI solutions help businesses automate processes, gain valuable insights, and make data-driven decisions.",
      icon_url: "/assets/icons/ai.svg",
      content: `
        <h2>Transform Your Business with AI</h2>
        <p>Our artificial intelligence solutions are designed to help businesses of all sizes harness the power of AI to automate processes, gain valuable insights, and make data-driven decisions.</p>

        <h3>What We Offer</h3>
        <p>We provide end-to-end AI solutions including:</p>
        <ul>
          <li>Machine Learning Models</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision Systems</li>
          <li>Predictive Analytics</li>
          <li>AI-Powered Chatbots</li>
          <li>Recommendation Systems</li>
        </ul>

        <h3>Our Approach</h3>
        <p>We follow a systematic approach to implementing AI solutions:</p>
        <ol>
          <li><strong>Discovery:</strong> Understanding your business needs and challenges</li>
          <li><strong>Data Assessment:</strong> Evaluating your data quality and requirements</li>
          <li><strong>Solution Design:</strong> Creating a tailored AI strategy</li>
          <li><strong>Development:</strong> Building and training custom AI models</li>
          <li><strong>Integration:</strong> Seamlessly incorporating AI into your existing systems</li>
          <li><strong>Monitoring:</strong> Continuous improvement and optimization</li>
        </ol>

        <h3>Benefits of Our AI Solutions</h3>
        <p>By implementing our AI solutions, you can expect:</p>
        <ul>
          <li>Increased operational efficiency</li>
          <li>Enhanced customer experiences</li>
          <li>Data-driven decision making</li>
          <li>Reduced costs through automation</li>
          <li>Competitive advantage in your industry</li>
        </ul>
      `,
      features: [
        {
          title: "Machine Learning Models",
          description: "Custom ML models trained on your data to solve specific business problems."
        },
        {
          title: "Natural Language Processing",
          description: "Extract insights from text data and automate language-based tasks."
        },
        {
          title: "Computer Vision",
          description: "Image and video analysis for object detection, classification, and more."
        },
        {
          title: "Predictive Analytics",
          description: "Forecast trends and behaviors to make proactive business decisions."
        },
        {
          title: "AI-Powered Chatbots",
          description: "Intelligent conversational agents for customer service and support."
        },
        {
          title: "Recommendation Systems",
          description: "Personalized suggestions to enhance user experience and increase conversions."
        }
      ]
    },
    {
      id: 2,
      title: "Cloud Services",
      slug: "cloud-services",
      short_description: "Comprehensive AWS and Azure cloud solutions for scalable and secure infrastructure.",
      description: "We provide end-to-end cloud services on AWS and Azure platforms to help businesses build scalable, secure, and cost-effective infrastructure.",
      icon_url: "/assets/icons/cloud.svg",
      content: `
        <h2>Cloud Services for Modern Businesses</h2>
        <p>Our comprehensive cloud services on AWS and Azure platforms help businesses build scalable, secure, and cost-effective infrastructure that meets their unique needs.</p>

        <h3>AWS Services</h3>
        <p>As an AWS partner, we offer expertise in:</p>
        <ul>
          <li>EC2 and ECS for compute solutions</li>
          <li>S3 and EBS for storage solutions</li>
          <li>RDS and DynamoDB for database management</li>
          <li>Lambda for serverless computing</li>
          <li>CloudFront for content delivery</li>
          <li>IAM for security and access management</li>
        </ul>

        <h3>Azure Services</h3>
        <p>Our Azure expertise includes:</p>
        <ul>
          <li>Azure Virtual Machines</li>
          <li>Azure Kubernetes Service (AKS)</li>
          <li>Azure Storage solutions</li>
          <li>Azure SQL Database</li>
          <li>Azure Functions</li>
          <li>Azure Active Directory</li>
        </ul>

        <h3>Our Cloud Services</h3>
        <p>We provide a full range of cloud services including:</p>
        <ul>
          <li><strong>Cloud Migration:</strong> Seamlessly move your applications and data to the cloud</li>
          <li><strong>Cloud Architecture:</strong> Design scalable and resilient cloud infrastructure</li>
          <li><strong>DevOps Implementation:</strong> Streamline your development and operations processes</li>
          <li><strong>Cloud Security:</strong> Implement robust security measures to protect your data</li>
          <li><strong>Cost Optimization:</strong> Maximize efficiency and minimize cloud spending</li>
          <li><strong>Managed Cloud Services:</strong> Ongoing support and maintenance of your cloud infrastructure</li>
        </ul>

        <h3>Benefits of Cloud Adoption</h3>
        <p>Moving to the cloud with our guidance provides numerous advantages:</p>
        <ul>
          <li>Scalability to handle growing workloads</li>
          <li>Reduced capital expenditure on hardware</li>
          <li>Improved disaster recovery capabilities</li>
          <li>Enhanced security and compliance</li>
          <li>Global reach and reduced latency</li>
          <li>Pay-as-you-go pricing models</li>
        </ul>
      `,
      features: [
        {
          title: "Cloud Migration",
          description: "Seamlessly move your applications and data to AWS or Azure cloud platforms."
        },
        {
          title: "Cloud Architecture",
          description: "Design scalable, resilient, and cost-effective cloud infrastructure."
        },
        {
          title: "DevOps Implementation",
          description: "Streamline development and operations with CI/CD pipelines and automation."
        },
        {
          title: "Cloud Security",
          description: "Implement robust security measures to protect your cloud resources and data."
        },
        {
          title: "Cost Optimization",
          description: "Maximize efficiency and minimize cloud spending with our optimization strategies."
        },
        {
          title: "Managed Cloud Services",
          description: "Ongoing support and maintenance of your cloud infrastructure."
        }
      ]
    },
    {
      id: 3,
      title: "Data Engineering",
      slug: "data-engineering",
      short_description: "Robust data engineering solutions to transform raw data into valuable business insights.",
      description: "Our data engineering team builds robust data pipelines, warehouses, and analytics solutions to transform your raw data into valuable business insights.",
      icon_url: "/assets/icons/data.svg",
      content: `
        <h2>Data Engineering Excellence</h2>
        <p>Our data engineering team builds robust data pipelines, warehouses, and analytics solutions to transform your raw data into valuable business insights.</p>

        <h3>Data Infrastructure</h3>
        <p>We design and implement modern data infrastructure including:</p>
        <ul>
          <li>Data lakes and data warehouses</li>
        </ul>

        <h3>Data Pipelines</h3>
        <p>We build robust and scalable data pipelines to ingest, process, and transform data from various sources.</p>
        <ul>
          <li>ETL (Extract, Transform, Load) processes</li>
          <li>Data streaming and real-time analytics</li>
          <li>Data quality and validation</li>
        </ul>

        <h3>Data Warehousing</h3>
        <p>We design and implement data warehouses to store and analyze large volumes of data.</p>
        <ul>
          <li>Schema design and optimization</li>
          <li>Data modeling and normalization</li>
          <li>Query optimization and performance tuning</li>
        </ul>

        <h3>Data Analytics</h3>
        <p>We provide data analytics solutions to help you gain insights from your data.</p>
        <ul>
          <li>Data visualization and reporting</li>
          <li>Statistical analysis and modeling</li>
          <li>Machine learning and predictive analytics</li>
        </ul>

        <h3>Benefits of Data Engineering</h3>
        <p>Our data engineering solutions can help you:</p>
        <ul>
          <li>Improve data quality and accuracy</li>
          <li>Gain insights from your data</li>
          <li>Make better business decisions</li>
          <li>Automate data processes</li>
          <li>Reduce data storage costs</li>
        </ul>
      `,
      features: [
        {
          title: "Data Pipeline Development",
          description: "Build reliable and scalable data pipelines for efficient data processing."
        },
        {
          title: "Data Warehouse Design",
          description: "Create optimized data warehouses for analytical workloads and reporting."
        },
        {
          title: "Real-time Data Processing",
          description: "Implement streaming data solutions for immediate insights and actions."
        },
        {
          title: "Data Governance",
          description: "Establish frameworks for data quality, security, and compliance."
        },
        {
          title: "Data Integration",
          description: "Connect and unify data from multiple sources for comprehensive analysis."
        },
        {
          title: "Data Architecture Consulting",
          description: "Expert guidance on building modern, scalable data infrastructure."
        }
      ]
    },
    {
      id: 4,
      title: "Digital Marketing",
      slug: "digital-marketing",
      short_description: "Strategic digital marketing services across Meta, WhatsApp, Viber, email, and more.",
      description: "Our digital marketing experts create and execute data-driven strategies across multiple platforms to drive growth and engagement for your business.",
      icon_url: "/assets/icons/marketing.svg",
      content: `
        <h2>Digital Marketing That Delivers Results</h2>
        <p>Our digital marketing experts create and execute data-driven strategies across multiple platforms to drive growth and engagement for your business.</p>

        <h3>Our Digital Marketing Services</h3>
        <p>We offer a comprehensive range of digital marketing services including:</p>
        <ul>
          <li><strong>Social Media Marketing:</strong> Strategic campaigns across Meta platforms (Facebook, Instagram), LinkedIn, Twitter, and more</li>
          <li><strong>Messaging App Marketing:</strong> Engaging campaigns via WhatsApp, Viber, and Telegram</li>
          <li><strong>Email Marketing:</strong> Personalized email campaigns with high conversion rates</li>
          <li><strong>Search Engine Optimization (SEO):</strong> Improving your organic visibility and rankings</li>
          <li><strong>Pay-Per-Click (PPC) Advertising:</strong> Targeted ads on Google, Bing, and social platforms</li>
          <li><strong>Content Marketing:</strong> Creating valuable content that attracts and engages your audience</li>
          <li><strong>Analytics and Reporting:</strong> Data-driven insights to optimize your marketing efforts</li>
        </ul>

        <h3>Our Approach</h3>
        <p>We follow a strategic approach to digital marketing:</p>
        <ol>
          <li><strong>Research:</strong> Understanding your audience, competitors, and market opportunities</li>
          <li><strong>Strategy Development:</strong> Creating a tailored marketing plan aligned with your goals</li>
          <li><strong>Campaign Execution:</strong> Implementing campaigns across relevant channels</li>
          <li><strong>Optimization:</strong> Continuously refining campaigns based on performance data</li>
          <li><strong>Reporting:</strong> Providing transparent insights into campaign performance</li>
        </ol>

        <h3>Why Choose Our Digital Marketing Services</h3>
        <ul>
          <li>Data-driven strategies based on analytics and insights</li>
          <li>Cross-channel expertise for integrated marketing campaigns</li>
          <li>Focus on ROI and measurable business outcomes</li>
          <li>Transparent reporting and communication</li>
          <li>Agile approach to adapt to market changes</li>
          <li>Experienced team with industry-specific knowledge</li>
        </ul>
      `,
      features: [
        {
          title: "Social Media Marketing",
          description: "Strategic campaigns across Meta platforms, LinkedIn, Twitter, and more."
        },
        {
          title: "Messaging App Marketing",
          description: "Engaging campaigns via WhatsApp, Viber, and Telegram."
        },
        {
          title: "Email Marketing",
          description: "Personalized email campaigns with high conversion rates."
        },
        {
          title: "Search Engine Optimization",
          description: "Improve your organic visibility and rankings in search results."
        },
        {
          title: "PPC Advertising",
          description: "Targeted ads on Google, Bing, and social platforms."
        },
        {
          title: "Content Marketing",
          description: "Create valuable content that attracts and engages your audience."
        }
      ]
    },
    {
      id: 5,
      title: "Web Development",
      slug: "web-development",
      short_description: "Custom web development solutions from simple websites to complex web applications.",
      description: "Our web development team creates custom, responsive, and user-friendly websites and web applications tailored to your business needs.",
      icon_url: "/assets/icons/web.svg",
      content: `
        <h2>Web Development Solutions</h2>
        <p>Our web development team creates custom, responsive, and user-friendly websites and web applications tailored to your business needs.</p>

        <h3>Our Web Development Services</h3>
        <p>We offer a wide range of web development services including:</p>
        <ul>
          <li><strong>Custom Website Development:</strong> Tailored websites that reflect your brand and meet your specific requirements</li>
          <li><strong>E-commerce Development:</strong> Online stores with secure payment processing and inventory management</li>
          <li><strong>Web Application Development:</strong> Complex web applications with advanced functionality</li>
          <li><strong>Progressive Web Apps (PWAs):</strong> Fast, reliable, and engaging web experiences</li>
          <li><strong>Content Management Systems:</strong> Easy-to-use CMS solutions for content updates</li>
          <li><strong>Website Maintenance and Support:</strong> Ongoing maintenance to keep your website secure and up-to-date</li>
        </ul>

        <h3>Technologies We Use</h3>
        <p>Our development stack includes:</p>
        <ul>
          <li><strong>Frontend:</strong> React, Next.js, Vue.js, Angular</li>
          <li><strong>Backend:</strong> Node.js, Python, PHP, .NET</li>
          <li><strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, SQL Server</li>
          <li><strong>CMS:</strong> WordPress, Drupal, Contentful, Strapi</li>
          <li><strong>E-commerce:</strong> Shopify, WooCommerce, Magento</li>
          <li><strong>DevOps:</strong> Docker, CI/CD, AWS, Azure</li>
        </ul>

        <h3>Our Web Development Process</h3>
        <ol>
          <li><strong>Discovery:</strong> Understanding your business goals and requirements</li>
          <li><strong>Planning:</strong> Creating a detailed project plan and architecture</li>
          <li><strong>Design:</strong> Developing wireframes and visual designs</li>
          <li><strong>Development:</strong> Building the website or application</li>
          <li><strong>Testing:</strong> Ensuring quality across devices and browsers</li>
          <li><strong>Deployment:</strong> Launching your website or application</li>
          <li><strong>Maintenance:</strong> Providing ongoing support and updates</li>
        </ol>

        <h3>Benefits of Our Web Development Services</h3>
        <ul>
          <li>Custom solutions tailored to your specific needs</li>
          <li>Responsive designs that work on all devices</li>
          <li>SEO-friendly development practices</li>
          <li>Scalable architecture that grows with your business</li>
          <li>Secure coding practices and regular updates</li>
          <li>Performance optimization for fast loading times</li>
        </ul>
      `,
      features: [
        {
          title: "Custom Website Development",
          description: "Tailored websites that reflect your brand and meet your specific requirements."
        },
        {
          title: "E-commerce Development",
          description: "Online stores with secure payment processing and inventory management."
        },
        {
          title: "Web Application Development",
          description: "Complex web applications with advanced functionality."
        },
        {
          title: "Progressive Web Apps",
          description: "Fast, reliable, and engaging web experiences that work offline."
        },
        {
          title: "Content Management Systems",
          description: "Easy-to-use CMS solutions for content updates."
        },
        {
          title: "Website Maintenance",
          description: "Ongoing maintenance to keep your website secure and up-to-date."
        }
      ]
    },
    {
      id: 6,
      title: "UI/UX Design",
      slug: "ui-ux-design",
      short_description: "User-centered design services that create intuitive and engaging digital experiences.",
      description: "Our UI/UX design team creates intuitive, engaging, and accessible digital experiences that delight users and achieve your business goals.",
      icon_url: "/assets/icons/design.svg",
      content: `
        <h2>UI/UX Design Excellence</h2>
        <p>Our UI/UX design team creates intuitive, engaging, and accessible digital experiences that delight users and achieve your business goals.</p>

        <h3>Our Design Services</h3>
        <p>We offer comprehensive UI/UX design services including:</p>
        <ul>
          <li><strong>User Research:</strong> Understanding your users' needs, behaviors, and pain points</li>
          <li><strong>UX Strategy:</strong> Developing a cohesive user experience strategy aligned with business goals</li>
          <li><strong>Information Architecture:</strong> Organizing content and features in a logical and intuitive way</li>
          <li><strong>Wireframing and Prototyping:</strong> Creating interactive models of your digital product</li>
          <li><strong>UI Design:</strong> Crafting visually appealing interfaces with consistent design systems</li>
          <li><strong>Usability Testing:</strong> Evaluating designs with real users to ensure effectiveness</li>
          <li><strong>Design Systems:</strong> Building scalable design systems for consistent user experiences</li>
        </ul>

        <h3>Our Design Process</h3>
        <ol>
          <li><strong>Discovery:</strong> Understanding your business, users, and project goals</li>
          <li><strong>Research:</strong> Conducting user research and competitive analysis</li>
          <li><strong>Strategy:</strong> Developing a UX strategy and information architecture</li>
          <li><strong>Wireframing:</strong> Creating low-fidelity representations of the interface</li>
          <li><strong>Prototyping:</strong> Building interactive prototypes for testing</li>
          <li><strong>Visual Design:</strong> Applying visual elements and creating a cohesive UI</li>
          <li><strong>Testing:</strong> Conducting usability tests and gathering feedback</li>
          <li><strong>Refinement:</strong> Iterating based on test results and feedback</li>
        </ol>

        <h3>Benefits of Our UI/UX Design Services</h3>
        <ul>
          <li>User-centered designs that meet real user needs</li>
          <li>Increased user satisfaction and engagement</li>
          <li>Improved conversion rates and user retention</li>
          <li>Reduced development costs through early problem identification</li>
          <li>Consistent and cohesive user experiences across platforms</li>
          <li>Accessible designs that reach all users</li>
        </ul>
      `,
      features: [
        {
          title: "User Research",
          description: "Understanding your users' needs, behaviors, and pain points."
        },
        {
          title: "UX Strategy",
          description: "Developing a cohesive user experience strategy aligned with business goals."
        },
        {
          title: "Information Architecture",
          description: "Organizing content and features in a logical and intuitive way."
        },
        {
          title: "Wireframing and Prototyping",
          description: "Creating interactive models of your digital product."
        },
        {
          title: "UI Design",
          description: "Crafting visually appealing interfaces with consistent design systems."
        },
        {
          title: "Usability Testing",
          description: "Evaluating designs with real users to ensure effectiveness."
        }
      ]
    }
  ])
}

export const fetchServiceBySlug = (slug) => {
  return fetchServices().then(services => services.find(service => service.slug === slug))
}

// Blogs
export const fetchBlogs = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "The Future of AI in Business: Trends to Watch in 2023",
      slug: "future-of-ai-in-business-2023",
      excerpt: "Explore the emerging AI trends that are transforming businesses across industries and how you can prepare for this technological revolution.",
      content: `
        <h2>The Future of AI in Business: Trends to Watch in 2023</h2>

        <p>Artificial Intelligence (AI) continues to revolutionize how businesses operate across all industries. As we move through 2023, several key trends are emerging that will shape the future of AI in business. In this article, we explore these trends and how forward-thinking companies can leverage them for competitive advantage.</p>

        <h3>1. Generative AI Goes Mainstream</h3>

        <p>Generative AI tools like ChatGPT, DALL-E, and Midjourney have captured public imagination, but their business applications are just beginning to be realized. In 2023, we're seeing companies integrate these technologies into their workflows for:</p>

        <ul>
          <li>Content creation and ideation</li>
          <li>Product design and prototyping</li>
          <li>Customer service automation</li>
          <li>Code generation and software development</li>
        </ul>

        <p>The ability to generate human-quality text, images, and even code is transforming productivity across departments. However, businesses must develop clear guidelines for responsible use and quality control.</p>

        <h3>2. AI-Powered Decision Intelligence</h3>

        <p>Decision intelligence—the application of AI to decision-making processes—is gaining traction as organizations seek to make more data-driven decisions. This trend involves:</p>

        <ul>
          <li>Predictive analytics that forecast outcomes of different decisions</li>
          <li>Prescriptive systems that recommend optimal actions</li>
          <li>Augmented analytics that help non-technical users interpret complex data</li>
        </ul>

        <p>By combining AI with human judgment, companies can make better decisions faster while maintaining the critical human element in strategic thinking.</p>

        <h3>3. Ethical AI and Governance Frameworks</h3>

        <p>As AI becomes more pervasive, the focus on ethical implementation and governance is intensifying. Organizations are developing comprehensive frameworks to ensure their AI systems are:</p>

        <ul>
          <li>Fair and unbiased</li>
          <li>Transparent and explainable</li>
          <li>Privacy-preserving</li>
          <li>Secure against adversarial attacks</li>
        </ul>

        <p>Regulatory pressure is also increasing, with the EU's AI Act and similar legislation worldwide setting new standards for AI accountability. Forward-thinking businesses are proactively addressing these concerns rather than waiting for regulatory mandates.</p>

        <h3>4. AI at the Edge</h3>

        <p>Edge AI—deploying AI algorithms directly on devices rather than in the cloud—is growing rapidly due to several advantages:</p>

        <ul>
          <li>Reduced latency for real-time applications</li>
          <li>Enhanced privacy by keeping sensitive data local</li>
          <li>Lower bandwidth requirements and cloud computing costs</li>
          <li>Continued functionality even with intermittent connectivity</li>
        </ul>

        <p>From manufacturing equipment with predictive maintenance capabilities to retail environments with real-time inventory management, edge AI is expanding the possibilities for intelligent systems in the physical world.</p>

        <h3>5. AI-Human Collaboration Models</h3>

        <p>Rather than replacing humans, the most successful AI implementations in 2023 focus on human-AI collaboration. This "augmented intelligence" approach is creating new workflows where:</p>

        <ul>
          <li>AI handles routine, repetitive tasks</li>
          <li>Humans focus on creative, strategic, and interpersonal activities</li>
          <li>AI provides recommendations that humans can evaluate and refine</li>
          <li>Continuous feedback loops improve both human and AI performance</li>
        </ul>

        <p>Organizations that effectively design these collaborative models are seeing significant productivity gains while maintaining employee engagement and job satisfaction.</p>

        <h3>Preparing Your Business for the AI Future</h3>

        <p>To capitalize on these trends, businesses should consider the following steps:</p>

        <ol>
          <li><strong>Develop an AI strategy</strong> aligned with business objectives</li>
          <li><strong>Invest in data infrastructure</strong> to ensure AI systems have quality inputs</li>
          <li><strong>Build AI literacy</strong> across the organization</li>
          <li><strong>Start with focused use cases</strong> that deliver measurable value</li>
          <li><strong>Establish ethical guidelines</strong> for AI development and deployment</li>
        </ol>

        <p>The organizations that thrive in this new era will be those that view AI not as a standalone technology but as a transformative force integrated throughout their operations and strategy.</p>

        <h3>Conclusion</h3>

        <p>The AI landscape is evolving rapidly, creating both challenges and opportunities for businesses. By staying informed about emerging trends and taking a thoughtful approach to implementation, organizations can harness the power of AI to drive innovation, efficiency, and competitive advantage in 2023 and beyond.</p>
      `,
      image_url: "/assets/blog/ai-future.jpeg",
      published_at: "2023-06-15",
      author: "Dr. Sarah Chen",
      category: "Artificial Intelligence",
      tags: ["AI", "Machine Learning", "Business Strategy", "Technology Trends", "Digital Transformation"]
    },
    {
      id: 2,
      title: "Cloud Migration: A Step-by-Step Guide for Enterprises",
      slug: "cloud-migration-step-by-step-guide",
      excerpt: "Learn how to successfully migrate your enterprise infrastructure to the cloud with this comprehensive guide covering strategy, planning, execution, and optimization.",
      content: `
        <h2>Cloud Migration: A Step-by-Step Guide for Enterprises</h2>

        <p>Moving enterprise infrastructure and applications to the cloud offers numerous benefits, including scalability, cost efficiency, and enhanced agility. However, cloud migration is a complex process that requires careful planning and execution. This guide provides a comprehensive framework for enterprises undertaking cloud migration initiatives.</p>

        <h3>Step 1: Define Your Cloud Strategy and Goals</h3>

        <p>Before diving into technical details, establish clear objectives for your cloud migration:</p>

        <ul>
          <li><strong>Business goals:</strong> Cost reduction, scalability, business agility, or innovation</li>
          <li><strong>Technical goals:</strong> Infrastructure modernization, application performance, or disaster recovery</li>
          <li><strong>Compliance requirements:</strong> Data sovereignty, industry regulations, or security standards</li>
        </ul>

        <p>Document these goals with specific metrics to measure success, such as expected cost savings, performance improvements, or time-to-market reductions.</p>

        <h3>Step 2: Assess Your Current Environment</h3>

        <p>Conduct a thorough assessment of your existing IT landscape:</p>

        <ul>
          <li><strong>Application inventory:</strong> Document all applications, their dependencies, and business criticality</li>
          <li><strong>Infrastructure mapping:</strong> Catalog servers, databases, storage, and network components</li>
          <li><strong>Utilization patterns:</strong> Analyze resource usage, peak loads, and performance requirements</li>
          <li><strong>Technical debt:</strong> Identify outdated systems or architectures that need modernization</li>
        </ul>

        <p>This assessment provides the foundation for making informed decisions about migration approaches for each workload.</p>

        <h3>Step 3: Choose the Right Migration Strategy</h3>

        <p>For each application or workload, select the appropriate migration strategy using the "6 Rs" framework:</p>

        <ol>
          <li><strong>Rehost (Lift and Shift):</strong> Move applications to the cloud without significant changes</li>
          <li><strong>Replatform (Lift and Optimize):</strong> Make minor optimizations while moving to the cloud</li>
          <li><strong>Refactor/Re-architect:</strong> Significantly modify applications to leverage cloud-native capabilities</li>
          <li><strong>Repurchase:</strong> Switch to a different product, typically SaaS</li>
          <li><strong>Retire:</strong> Eliminate applications that are no longer needed</li>
          <li><strong>Retain:</strong> Keep certain applications on-premises for now</li>
        </ol>

        <p>Your strategy may include a combination of these approaches based on business value, technical complexity, and risk tolerance.</p>

        <h3>Step 4: Select Cloud Providers and Services</h3>

        <p>Based on your requirements, choose the appropriate cloud providers and service models:</p>

        <ul>
          <li><strong>Cloud providers:</strong> AWS, Azure, Google Cloud, or a multi-cloud approach</li>
          <li><strong>Service models:</strong> IaaS, PaaS, SaaS, or a combination</li>
          <li><strong>Specialized services:</strong> Databases, analytics, AI/ML, or industry-specific solutions</li>
        </ul>

        <p>Consider factors such as existing skills, vendor relationships, pricing models, and geographic availability when making these decisions.</p>

        <h3>Step 5: Design Your Cloud Architecture</h3>

        <p>Create a robust cloud architecture that addresses:</p>

        <ul>
          <li><strong>Network design:</strong> VPCs, subnets, connectivity, and hybrid integration</li>
          <li><strong>Security architecture:</strong> Identity management, encryption, network security, and compliance controls</li>
          <li><strong>Resilience patterns:</strong> High availability, disaster recovery, and backup strategies</li>
          <li><strong>Operational model:</strong> Monitoring, logging, alerting, and management tools</li>
        </ul>

        <p>Document your architecture using diagrams and design documents that can be reviewed by stakeholders and serve as a reference during implementation.</p>

        <h3>Step 6: Build a Migration Plan</h3>

        <p>Develop a detailed migration plan that includes:</p>

        <ul>
          <li><strong>Prioritization:</strong> Sequence workloads based on complexity, business impact, and dependencies</li>
          <li><strong>Timeline:</strong> Realistic schedules with milestones and dependencies</li>
          <li><strong>Resource allocation:</strong> Internal teams, partners, and tools required</li>
          <li><strong>Communication plan:</strong> How to keep stakeholders informed throughout the process</li>
          <li><strong>Testing strategy:</strong> Approaches for validating migrated workloads</li>
          <li><strong>Rollback procedures:</strong> Plans for addressing issues or failures</li>
        </ul>

        <p>Consider a phased approach, starting with non-critical workloads to build experience and refine processes before tackling mission-critical applications.</p>

        <h3>Step 7: Prepare Your Organization</h3>

        <p>Address the people and process aspects of cloud migration:</p>

        <ul>
          <li><strong>Skills development:</strong> Train teams on cloud technologies and new operational models</li>
          <li><strong>Process updates:</strong> Adapt ITIL or DevOps practices for cloud environments</li>
          <li><strong>Organizational changes:</strong> Consider cloud centers of excellence or cloud platform teams</li>
          <li><strong>Change management:</strong> Help users adapt to new applications or interfaces</li>
        </ul>

        <p>The technical success of your migration depends heavily on organizational readiness and adoption.</p>

        <h3>Step 8: Execute the Migration</h3>

        <p>During the migration execution phase:</p>

        <ul>
          <li><strong>Follow the migration plan</strong> but be prepared to adapt as you learn</li>
          <li><strong>Maintain regular communication</strong> with stakeholders about progress and issues</li>
          <li><strong>Document everything</strong>, including configurations, issues encountered, and solutions</li>
          <li><strong>Conduct thorough testing</strong> of migrated workloads before cutover</li>
          <li><strong>Manage cutover carefully</strong> with clear go/no-go criteria</li>
        </ul>

        <p>Consider using specialized migration tools and services to automate and accelerate the process where appropriate.</p>

        <h3>Step 9: Optimize and Operate</h3>

        <p>After migration, focus on optimization and operational excellence:</p>

        <ul>
          <li><strong>Cost optimization:</strong> Right-sizing resources, using reserved instances, and implementing automation</li>
          <li><strong>Performance tuning:</strong> Adjusting configurations for optimal performance</li>
          <li><strong>Security posture:</strong> Continuous security monitoring and improvement</li>
          <li><strong>Operational processes:</strong> Refining monitoring, incident response, and management procedures</li>
        </ul>

        <p>Cloud migration is not a one-time event but the beginning of a continuous improvement journey.</p>

        <h3>Step 10: Measure and Communicate Success</h3>

        <p>Finally, measure the outcomes against your initial goals:</p>

        <ul>
          <li><strong>Quantify benefits</strong> realized in terms of cost savings, performance improvements, etc.</li>
          <li><strong>Document lessons learned</strong> to improve future migration waves</li>
          <li><strong>Celebrate successes</strong> and recognize team contributions</li>
          <li><strong>Communicate value</strong> to business stakeholders and leadership</li>
        </ul>

        <p>This feedback loop helps build momentum for continued cloud adoption and transformation.</p>

        <h3>Conclusion</h3>

        <p>Cloud migration is a complex but rewarding journey that can transform your enterprise IT capabilities. By following this structured approach and adapting it to your specific circumstances, you can minimize risks and maximize the benefits of your cloud adoption initiative.</p>

        <p>Remember that successful cloud migration is as much about people and processes as it is about technology. Invest time in organizational change management and skills development to ensure long-term success in the cloud.</p>
      `,
      image_url: "/assets/blog/cloud-migration.jpg",
      published_at: "2023-05-22",
      author: "Michael Rodriguez",
      category: "Cloud Computing",
      tags: ["Cloud Migration", "AWS", "Azure", "Enterprise IT", "Digital Transformation"]
    },
    {
      id: 3,
      title: "Building a Data-Driven Culture: Strategies for Success",
      slug: "building-data-driven-culture",
      excerpt: "Discover how to foster a data-driven culture in your organization with practical strategies that empower teams to make better decisions using data.",
      content: `
        <h2>Building a Data-Driven Culture: Strategies for Success</h2>

        <p>In today's business environment, data is often called the new oil—a valuable resource that can fuel innovation, efficiency, and competitive advantage. However, simply collecting data isn't enough. To truly harness its power, organizations need to build a data-driven culture where decisions at all levels are informed by data rather than intuition or tradition alone.</p>

        <p>This article explores practical strategies for fostering a data-driven culture that empowers teams to leverage data effectively in their daily work.</p>

        <h3>What Is a Data-Driven Culture?</h3>

        <p>A data-driven culture is one where:</p>

        <ul>
          <li>Data is considered a strategic asset</li>
          <li>Decisions are based on analysis rather than gut feeling</li>
          <li>Employees at all levels have access to relevant data</li>
          <li>Data literacy is valued and developed</li>
          <li>Testing and experimentation are encouraged</li>
          <li>Continuous improvement is guided by metrics</li>
        </ul>

        <p>Building such a culture requires more than just investing in technology—it demands changes in mindset, processes, and organizational structures.</p>

        <h3>Strategy 1: Start with Leadership Commitment</h3>

        <p>Cultural transformation begins at the top. Leaders must not only advocate for data-driven decision making but also demonstrate it in their own actions:</p>

        <ul>
          <li><strong>Lead by example:</strong> Executives should visibly use data in their decision-making processes</li>
          <li><strong>Allocate resources:</strong> Invest in necessary data infrastructure, tools, and training</li>
          <li><strong>Set expectations:</strong> Make it clear that major decisions should be supported by data</li>
          <li><strong>Celebrate wins:</strong> Recognize and reward data-driven successes</li>
        </ul>

        <p>When leadership consistently asks, "What does the data tell us?" it sends a powerful message throughout the organization.</p>

        <h3>Strategy 2: Democratize Data Access</h3>

        <p>Data can't drive decisions if it's locked away in silos or accessible only to analysts. Organizations should:</p>

        <ul>
          <li><strong>Implement self-service analytics tools</strong> that allow non-technical users to explore data</li>
          <li><strong>Create a central data repository</strong> or data lake with appropriate governance</li>
          <li><strong>Develop clear data dictionaries</strong> so everyone understands what the data represents</li>
          <li><strong>Balance access with security</strong> through role-based permissions</li>
        </ul>

        <p>When employees can easily access relevant data, they're more likely to incorporate it into their decision-making processes.</p>

        <h3>Strategy 3: Invest in Data Literacy</h3>

        <p>Access to data is only valuable if people know how to interpret and use it effectively. Organizations should:</p>

        <ul>
          <li><strong>Develop training programs</strong> for different roles and skill levels</li>
          <li><strong>Create data champions</strong> within departments to provide peer support</li>
          <li><strong>Incorporate basic data skills</strong> into job descriptions and performance evaluations</li>
          <li><strong>Provide resources</strong> like glossaries, tutorials, and best practice guides</li>
        </ul>

        <p>Data literacy should be viewed as a core competency, similar to digital literacy or communication skills.</p>

        <h3>Strategy 4: Align Metrics with Business Objectives</h3>

        <p>To be meaningful, data initiatives must connect directly to business goals:</p>

        <ul>
          <li><strong>Define key performance indicators (KPIs)</strong> that reflect strategic priorities</li>
          <li><strong>Create dashboards</strong> that visualize progress toward these goals</li>
          <li><strong>Ensure metrics are actionable</strong>—they should suggest clear next steps</li>
          <li><strong>Regularly review and refine metrics</strong> as business needs evolve</li>
        </ul>

        <p>When data directly informs progress toward business objectives, its value becomes immediately apparent.</p>

        <h3>Strategy 5: Foster a Culture of Experimentation</h3>

        <p>Data-driven organizations embrace testing and learning:</p>

        <ul>
          <li><strong>Encourage hypothesis-driven decision making</strong></li>
          <li><strong>Implement A/B testing</strong> for product features, marketing campaigns, etc.</li>
          <li><strong>Create safe spaces for failure</strong> when data-backed experiments don't succeed</li>
          <li><strong>Document and share learnings</strong> from both successful and unsuccessful initiatives</li>
        </ul>

        <p>This approach reduces the risk of major changes by testing assumptions with data before full implementation.</p>

        <h3>Strategy 6: Build Cross-Functional Data Teams</h3>

        <p>Breaking down silos between data specialists and business units accelerates adoption:</p>

        <ul>
          <li><strong>Embed data analysts</strong> within business teams</li>
          <li><strong>Create data working groups</strong> with representatives from different departments</li>
          <li><strong>Implement collaborative projects</strong> that bring together domain experts and data professionals</li>
          <li><strong>Develop shared vocabularies</strong> that bridge technical and business perspectives</li>
        </ul>

        <p>These connections ensure that data work remains relevant to business needs and that insights are properly contextualized.</p>

        <h3>Strategy 7: Address Data Quality and Trust</h3>

        <p>People won't use data they don't trust. Organizations should:</p>

        <ul>
          <li><strong>Implement data governance frameworks</strong> to ensure quality and consistency</li>
          <li><strong>Clearly communicate data limitations</strong> and appropriate uses</li>
          <li><strong>Create feedback mechanisms</strong> for reporting data issues</li>
          <li><strong>Invest in data cleaning and preparation</strong> to improve reliability</li>
        </ul>

        <p>Building trust in data is a prerequisite for a truly data-driven culture.</p>

        <h3>Strategy 8: Start Small and Scale</h3>

        <p>Cultural transformation doesn't happen overnight. A phased approach works best:</p>

        <ul>
          <li><strong>Begin with pilot projects</strong> that can demonstrate quick wins</li>
          <li><strong>Focus initially on high-impact areas</strong> where data can clearly add value</li>
          <li><strong>Document and share success stories</strong> to build momentum</li>
          <li><strong>Gradually expand data initiatives</strong> based on lessons learned</li>
        </ul>

        <p>This approach builds confidence and capabilities while generating tangible results that justify further investment.</p>

        <h3>Overcoming Common Challenges</h3>

        <p>Building a data-driven culture often faces several obstacles:</p>

        <ul>
          <li><strong>Resistance to change:</strong> Address this through education, involvement, and demonstrating value</li>
          <li><strong>Skills gaps:</strong> Invest in training and consider hiring or partnering to fill critical needs</li>
          <li><strong>Legacy systems:</strong> Develop integration strategies or modernization roadmaps</li>
          <li><strong>Data silos:</strong> Implement technical and organizational solutions to connect disparate data sources</li>
        </ul>

        <p>Acknowledging and planning for these challenges increases the likelihood of successful cultural transformation.</p>

        <h3>Conclusion</h3>

        <p>Building a data-driven culture is a journey that requires commitment, investment, and patience. By implementing these strategies, organizations can transform how they operate, making decisions based on evidence rather than intuition alone.</p>

        <p>The rewards of this transformation are substantial: better decision making, increased efficiency, improved customer experiences, and ultimately, stronger business performance. In an increasingly competitive and complex business environment, organizations that successfully build data-driven cultures will have a significant advantage over those that don't.</p>

        <p>Remember that the goal isn't data for data's sake, but rather better outcomes through informed decision making at all levels of the organization.</p>
      `,
      image_url: "/assets/blog/data-culture.jpg",
      published_at: "2023-04-10",
      author: "Jennifer Park",
      category: "Data & Analytics",
      tags: ["Data Culture", "Analytics", "Business Intelligence", "Organizational Change", "Data Strategy"]
    },
    {
      id: 4,
      title: "Effective WhatsApp Marketing: Strategies for Business Growth",
      slug: "effective-whatsapp-marketing-strategies",
      excerpt: "Learn how to leverage WhatsApp as a powerful marketing channel with strategies for engagement, customer service, and sales that respect user privacy.",
      content: `
        <h2>Effective WhatsApp Marketing: Strategies for Business Growth</h2>

        <p>With over 2 billion users worldwide, WhatsApp has evolved from a simple messaging app to a powerful marketing channel for businesses. Its high engagement rates, direct communication capabilities, and growing business features make it an essential platform for companies looking to connect with customers in a more personal way.</p>

        <p>This article explores effective strategies for leveraging WhatsApp as part of your marketing mix while respecting user privacy and preferences.</p>

        <h3>Why WhatsApp Marketing Matters</h3>

        <p>Before diving into strategies, it's important to understand why WhatsApp deserves attention in your marketing plan:</p>

        <ul>
          <li><strong>Exceptional open rates:</strong> WhatsApp messages have an average open rate of 98%, far exceeding email marketing</li>
          <li><strong>Direct customer connection:</strong> Messages arrive directly on customers' phones, creating immediate visibility</li>
          <li><strong>Rich media capabilities:</strong> Support for text, images, video, documents, and location sharing</li>
          <li><strong>End-to-end encryption:</strong> Privacy features that build trust with security-conscious customers</li>
          <li><strong>Global reach:</strong> Widespread adoption across diverse markets, particularly in Asia, Latin America, and Europe</li>
        </ul>

        <h3>Setting Up WhatsApp Business</h3>

        <p>The foundation of WhatsApp marketing is either the WhatsApp Business app (for small businesses) or the WhatsApp Business API (for medium to large enterprises):</p>

        <h4>WhatsApp Business App</h4>
        <ul>
          <li>Create a business profile with important information like address, description, and hours</li>
          <li>Set up quick replies for common questions</li>
          <li>Organize contacts with labels</li>
          <li>Create catalogs to showcase products</li>
          <li>Use away messages for after-hours communication</li>
        </ul>

        <h4>WhatsApp Business API</h4>
        <ul>
          <li>Integrate WhatsApp with your existing business systems</li>
          <li>Enable multiple team members to manage conversations</li>
          <li>Implement chatbots for automated responses</li>
          <li>Send notifications and updates at scale</li>
          <li>Access advanced analytics and reporting</li>
        </ul>

        <p>Choose the option that best fits your business size, needs, and technical capabilities.</p>

        <h3>Strategy 1: Building Your WhatsApp Subscriber Base</h3>

        <p>Unlike email marketing, WhatsApp requires users to initiate contact with your business. Here's how to grow your subscriber base:</p>

        <ul>
          <li><strong>Add WhatsApp buttons</strong> to your website, email signatures, and social media profiles</li>
          <li><strong>Create QR codes</strong> that open WhatsApp conversations when scanned</li>
          <li><strong>Offer exclusive content or promotions</strong> for WhatsApp subscribers</li>
          <li><strong>Use click-to-WhatsApp ads</strong> on Facebook and Instagram</li>
          <li><strong>Include WhatsApp as a customer service option</strong> at checkout or on support pages</li>
          <li><strong>Add WhatsApp contact info</strong> on packaging, receipts, and physical marketing materials</li>
        </ul>

        <p>Always be transparent about what subscribers can expect in terms of content and frequency.</p>

        <h3>Strategy 2: Customer Service Excellence</h3>

        <p>One of the most valuable applications of WhatsApp for business is customer service:</p>

        <ul>
          <li><strong>Offer real-time support</strong> through WhatsApp as an alternative to phone or email</li>
          <li><strong>Set clear expectations</strong> for response times (and meet them consistently)</li>
          <li><strong>Use status updates</strong> to inform customers about business hours or service disruptions</li>
          <li><strong>Create a knowledge base</strong> of quick replies for common questions</li>
          <li><strong>Implement chatbots</strong> for 24/7 basic support, with seamless handoff to human agents</li>
          <li><strong>Follow up after purchases</strong> to ensure customer satisfaction</li>
        </ul>

        <p>Excellent WhatsApp customer service not only resolves issues but also builds relationships that lead to repeat business.</p>

        <h3>Strategy 3: Personalized Marketing Messages</h3>

        <p>WhatsApp's direct nature makes it ideal for personalized marketing, but this must be done respectfully:</p>

        <ul>
          <li><strong>Segment your audience</strong> based on preferences, purchase history, or engagement</li>
          <li><strong>Send personalized recommendations</strong> based on previous interactions</li>
          <li><strong>Create exclusive offers</strong> for WhatsApp subscribers</li>
          <li><strong>Use broadcast lists</strong> (not groups) to send targeted messages to up to 256 contacts at once</li>
          <li><strong>Incorporate the customer's name</strong> and relevant details in messages</li>
          <li><strong>Time messages appropriately</strong> based on time zones and known activity patterns</li>
        </ul>

        <p>Remember that WhatsApp is a personal space—messages should feel helpful and relevant, not intrusive.</p>

        <h3>Strategy 4: Rich Media Content Marketing</h3>

        <p>WhatsApp supports various media types that can enhance your marketing messages:</p>

        <ul>
          <li><strong>Product images and videos</strong> that showcase features and benefits</li>
          <li><strong>How-to guides and tutorials</strong> in PDF format</li>
          <li><strong>Voice notes</strong> for a more personal touch in explanations or greetings</li>
          <li><strong>Location sharing</strong> for events or store locations</li>
          <li><strong>Status updates</strong> for time-sensitive offers or announcements</li>
        </ul>

        <p>Keep media files optimized for mobile viewing and quick loading, even on slower connections.</p>

        <h3>Strategy 5: WhatsApp for Sales and Transactions</h3>

        <p>WhatsApp can serve as an effective sales channel:</p>

        <ul>
          <li><strong>Create a product catalog</strong> within WhatsApp Business</li>
          <li><strong>Send payment links</strong> for seamless transactions</li>
          <li><strong>Offer personalized shopping assistance</strong> via chat</li>
          <li><strong>Send order confirmations and shipping updates</strong></li>
          <li><strong>Implement WhatsApp Pay</strong> where available for in-chat payments</li>
          <li><strong>Use cart abandonment reminders</strong> for e-commerce businesses</li>
        </ul>

        <p>The conversational nature of WhatsApp allows for addressing objections and providing additional information that can help close sales.</p>

        <h3>Strategy 6: Building Community and Loyalty</h3>

        <p>WhatsApp can help foster community and strengthen customer loyalty:</p>

        <ul>
          <li><strong>Share behind-the-scenes content</strong> to humanize your brand</li>
          <li><strong>Create exclusive groups</strong> for VIP customers (with their permission)</li>
          <li><strong>Gather feedback and conduct surveys</strong> in a conversational format</li>
          <li><strong>Send birthday messages or anniversary greetings</strong> to build relationships</li>
          <li><strong>Share user-generated content</strong> (with permission) to showcase your community</li>
        </ul>

        <p>These community-building efforts can transform customers into brand advocates who recommend your business to others.</p>

        <h3>Strategy 7: Integrating WhatsApp with Other Marketing Channels</h3>

        <p>WhatsApp marketing works best as part of an integrated strategy:</p>

        <ul>
          <li><strong>Connect WhatsApp with your CRM</strong> to maintain consistent customer information</li>
          <li><strong>Use WhatsApp as a follow-up channel</strong> for email campaigns</li>
          <li><strong>Promote WhatsApp conversations</strong> in social media posts</li>
          <li><strong>Integrate WhatsApp into your website</strong> via chat widgets</li>
          <li><strong>Coordinate messaging across channels</strong> for consistent communication</li>
        </ul>

        <p>This omnichannel approach ensures customers receive consistent experiences regardless of how they interact with your brand.</p>

        <h3>Best Practices and Compliance</h3>

        <p>To maintain effectiveness and compliance, follow these best practices:</p>

        <ul>
          <li><strong>Always get explicit opt-in</strong> before adding customers to your WhatsApp marketing</li>
          <li><strong>Provide clear opt-out instructions</strong> in your messages</li>
          <li><strong>Respect messaging frequency</strong>—quality over quantity is essential</li>
          <li><strong>Comply with WhatsApp's Business Policy</strong> to avoid account restrictions</li>
          <li><strong>Follow data protection regulations</strong> like GDPR or CCPA</li>
          <li><strong>Maintain appropriate business hours</strong> for messaging unless it's urgent</li>
        </ul>

        <p>Respecting these guidelines ensures sustainable, long-term success with WhatsApp marketing.</p>

        <h3>Measuring Success</h3>

        <p>Track these key metrics to evaluate your WhatsApp marketing effectiveness:</p>

        <ul>
          <li><strong>Delivery and read rates</strong> for your messages</li>
          <li><strong>Response rates and times</strong> for customer inquiries</li>
          <li><strong>Conversion rates</strong> from WhatsApp interactions</li>
          <li><strong>Customer satisfaction scores</strong> for WhatsApp support</li>
          <li><strong>Growth rate of your WhatsApp subscriber base</li>
          <li><strong>Sales attributed to WhatsApp conversations</strong></li>
        </ul>

        <p>Use these insights to continuously refine your WhatsApp marketing strategy.</p>

        <h3>Conclusion</h3>

        <p>WhatsApp marketing offers unprecedented opportunities to connect with customers in a direct, personal way. By implementing these strategies while respecting the personal nature of the platform, businesses can build stronger customer relationships, improve service quality, and drive growth.</p>

        <p>The key to success lies in providing genuine value through your WhatsApp communications—whether that's exceptional customer service, exclusive content, or personalized offers. When done right, WhatsApp becomes not just another marketing channel, but a powerful tool for building lasting customer relationships.</p>
      `,
      image_url: "/assets/blog/digital_marketing.jpeg",
      published_at: "2023-03-18",
      author: "Alex Thompson",
      category: "Digital Marketing",
      tags: ["WhatsApp Marketing", "Messaging Apps", "Mobile Marketing", "Customer Engagement", "Social Media"]
    },
    {
      id: 5,
      title: "Responsive Web Design: Best Practices for 2023",
      slug: "responsive-web-design-best-practices-2023",
      excerpt: "Explore the latest best practices in responsive web design to ensure your websites deliver exceptional user experiences across all devices and screen sizes.",
      content: `
        <h2>Responsive Web Design: Best Practices for 2023</h2>

        <p>In today's multi-device world, responsive web design is no longer optional—it's essential. With users accessing websites from smartphones, tablets, laptops, desktops, and even smart TVs, creating experiences that adapt seamlessly to different screen sizes and capabilities is crucial for success.</p>

        <p>This article explores the latest best practices in responsive web design to ensure your websites deliver exceptional user experiences across all devices.</p>

        <h3>The Evolution of Responsive Design</h3>

        <p>Since Ethan Marcotte first coined the term "responsive web design" in 2010, the approach has evolved significantly:</p>

        <ul>
          <li><strong>2010-2015:</strong> Focus on fluid grids, flexible images, and media queries</li>
          <li><strong>2015-2020:</strong> Mobile-first design, performance optimization, and component-based approaches</li>
          <li><strong>2020-Present:</strong> Container queries, fluid typography, and adaptive loading strategies</li>
        </ul>

        <p>Today's responsive design goes beyond just adapting layouts—it encompasses performance, accessibility, and contextual adaptation to provide optimal experiences regardless of device.</p>

        <h3>1. Embrace a Mobile-First Approach</h3>

        <p>Mobile-first design remains a cornerstone of effective responsive design:</p>

        <ul>
          <li><strong>Start with the mobile experience</strong> and progressively enhance for larger screens</li>
          <li><strong>Focus on core content and functionality</strong> first, then add complexity for larger viewports</li>
          <li><strong>Use min-width media queries</strong> rather than max-width to follow the mobile-first principle</li>
        </ul>

        <p>This approach ensures that the mobile experience—often the most constrained and most commonly used—receives appropriate attention and optimization.</p>

        <h3>2. Implement Responsive Typography</h3>

        <p>Typography should adapt fluidly across screen sizes:</p>

        <ul>
          <li><strong>Use fluid typography with clamp()</strong> to scale font sizes smoothly between minimum and maximum values:
            <code>font-size: clamp(1rem, 2.5vw, 2rem);</code>
          </li>
          <li><strong>Adjust line heights</strong> for different screen sizes to maintain readability</li>
          <li><strong>Consider different font weights</strong> for different screen sizes (lighter on desktop, bolder on mobile)</li>
          <li><strong>Ensure sufficient contrast</strong> across all device types and lighting conditions</li>
        </ul>

        <p>Fluid typography creates more elegant transitions between viewport sizes and eliminates the need for numerous breakpoints just for text adjustments.</p>

        <h3>3. Leverage Modern CSS Layout Techniques</h3>

        <p>Take advantage of contemporary CSS features for more robust responsive layouts:</p>

        <ul>
          <li><strong>CSS Grid</strong> for two-dimensional layouts that can dramatically reshape across breakpoints</li>
          <li><strong>Flexbox</strong> for one-dimensional layouts and alignment challenges</li>
          <li><strong>CSS Container Queries</strong> to style elements based on their container's size rather than the viewport</li>
          <li><strong>Subgrid</strong> for aligning nested grid items to the parent grid</li>
          <li><strong>Aspect-ratio property</strong> to maintain proportions of elements as they resize</li>
        </ul>

        <p>These modern techniques reduce the amount of code needed and create more maintainable responsive designs.</p>

        <h3>4. Optimize Images and Media</h3>

        <p>Media often accounts for the majority of page weight and can significantly impact performance:</p>

        <ul>
          <li><strong>Use responsive images with srcset and sizes attributes</strong> to serve appropriate image sizes:
            <code><img srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1600w" sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" src="fallback.jpg" alt="Description"></code>
          </li>
          <li><strong>Consider modern image formats</strong> like WebP and AVIF with appropriate fallbacks</li>
          <li><strong>Implement lazy loading</strong> for images and videos below the fold</li>
          <li><strong>Use the picture element</strong> for art direction (showing different crops on different devices)</li>
          <li><strong>Ensure text remains readable</strong> when overlaid on images across all screen sizes</li>
        </ul>

        <p>Proper image optimization can dramatically improve loading times and user experience, particularly on mobile devices with limited bandwidth.</p>

        <h3>5. Design for Touch, Mouse, and Keyboard</h3>

        <p>Different devices mean different input methods, all of which need consideration:</p>

        <ul>
          <li><strong>Ensure touch targets are at least 44×44 pixels</strong> for comfortable tapping on mobile</li>
          <li><strong>Implement hover states thoughtfully</strong>, ensuring functionality is accessible without hover</li>
          <li><strong>Test keyboard navigation</strong> thoroughly, particularly for complex interactive elements</li>
          <li><strong>Consider gesture-based interactions</strong> for mobile while maintaining alternative access methods</li>
          <li><strong>Use @media (hover: hover)</strong> to detect devices with hover capability</li>
        </ul>

        <p>A truly responsive design adapts not just to screen size but to the way users interact with different devices.</p>

        <h3>6. Adopt a Component-Based Approach</h3>

        <p>Component-based design improves consistency and maintainability:</p>

        <ul>
          <li><strong>Build a responsive component library</strong> with variants for different contexts</li>
          <li><strong>Document how components behave</strong> across breakpoints</li>
          <li><strong>Test components independently</strong> across various screen sizes</li>
          <li><strong>Consider how components interact</strong> when combined in different layouts</li>
          <li><strong>Use design tokens</strong> for consistent spacing, typography, and color across components</li>
        </ul>

        <p>This approach aligns well with modern frontend frameworks and design systems, creating a more systematic approach to responsive design.</p>

        <h3>7. Prioritize Performance Across Devices</h3>

        <p>Performance is a critical aspect of responsive design:</p>

        <ul>
          <li><strong>Implement adaptive loading</strong> to serve different experiences based on network and device capabilities</li>
          <li><strong>Use code splitting</strong> to load only necessary JavaScript for each page</li>
          <li><strong>Consider reduced motion options</strong> for animations to respect user preferences</li>
          <li><strong>Test performance on low-end devices</strong>, not just your development machine</li>
          <li><strong>Optimize critical rendering path</strong> to improve perceived loading speed</li>
        </ul>

        <p>A visually responsive site that performs poorly on mobile devices fails to deliver a truly responsive experience.</p>
      ` ,
      image_url: "/assets/blog/responsive-design.jpg",
      published_at: "2023-02-25",
      author: "David Lee",
      category: "Web Development",
      tags: ["Responsive Design", "Web Development", "CSS", "Mobile-First", "User Experience"]
    }
  ])
}

export const fetchBlogBySlug = (slug) => {
  return fetchBlogs().then(blogs => blogs.find(blog => blog.slug === slug))
}

// Function to fetch related blogs based on category
export const fetchRelatedBlogs = async (blogId, category) => {
  try {
    // Simulating an API call to fetch blogs that share the same category
    const allBlogs = await fetchBlogs(); // Fetch all blogs (or use an actual API)
    
    const relatedBlogs = allBlogs.filter(
      (blog) => blog.category === category && blog.id !== blogId
    );

    return relatedBlogs;
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};


// Testimonials
export const fetchTestimonials = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Sarah L., CEO of TechSolutions Inc.",
      avatar_url: "/assets/testimonials/sarah-l.jpg",
      testimonial: "Working with this team was a game-changer for our business. Their AI solutions helped us streamline operations and increase efficiency by 30%. Highly recommended!",
      rating: 5,
      project_type: "AI Solutions"
    },
    {
      id: 2,
      name: "John B., CTO of Cloud Innovators",
      avatar_url: "/assets/testimonials/jhon-b.jpg",
      testimonial: "Their expertise in cloud migration and architecture is unparalleled. They successfully migrated our entire infrastructure to AWS with minimal downtime and optimized our costs significantly.",
      rating: 5,
      project_type: "Cloud Services"
    },
    {
      id: 3,
      name: "Emily K., Marketing Director at eShop Global",
      avatar_url: "/assets/testimonials/emily-k.jpg",
      testimonial: "The digital marketing campaigns they crafted for us resulted in a 150% increase in online sales within six months. Their strategic approach and understanding of our target audience were exceptional.",
      rating: 5,
      project_type: "Digital Marketing"
    },
    {
      id: 4,
      name: "David R., Founder of StartupX",
      avatar_url: "/assets/testimonials/david-r.jpg",
      testimonial: "From UI/UX design to full-stack web development, they delivered a stunning and highly functional platform that has received rave reviews from our users. Their attention to detail is commendable.",
      rating: 4,
      project_type: "Web Development & UI/UX Design"
    },
    {
      id: 5,
      name: "Maria G., Head of Analytics at DataCorp",
      avatar_url: "/assets/testimonials/maria-g.jpg",
      testimonial: "The data engineering team built robust data pipelines that have transformed our ability to generate insights. Our reporting is now faster and more accurate than ever before.",
      rating: 5,
      project_type: "Data Engineering"
    }
  ])
}

// Portfolios / Case Studies (combining for simplicity, can be split if needed)
export const fetchPortfolios = () => { // Renaming to fetchCaseStudies for clarity, assuming portfolios are case studies
  return Promise.resolve([
    {
      id: 1,
      title: "AI-Powered Sales Forecasting for Retail Giant",
      slug: "ai-sales-forecasting-retail",
      client: "Global Retail Corp",
      industry: "Retail",
      services_provided: ["AI Solutions", "Predictive Analytics"],
      challenge: "The client, a major retail chain, struggled with inaccurate sales forecasting, leading to overstocking or stockouts, impacting profitability.",
      solution: "We developed a custom machine learning model that analyzed historical sales data, seasonality, promotional activities, and external economic factors to predict future sales with high accuracy. The solution was integrated into their existing ERP system.",
      results: [
        "25% improvement in forecast accuracy",
        "15% reduction in inventory holding costs",
        "10% decrease in stockout incidents",
        "Enhanced ability to plan promotions and staffing"
      ],
      image_url: "/assets/case-studies/retail-ai.jpg",
      thumbnail_url: "/assets/case-studies/retail-ai-thumb.jpg",
      testimonial_quote: "The AI forecasting system has revolutionized our planning process. We're making smarter decisions, faster.",
      technologies_used: ["Python", "TensorFlow", "AWS SageMaker", "SQL"],
      published_at: "2023-07-01"
    },
    {
      id: 2,
      title: "Scalable Cloud Infrastructure for a Fintech Startup",
      slug: "cloud-infra-fintech",
      client: "FinSecure Payments",
      industry: "Fintech",
      services_provided: ["Cloud Services", "DevOps Implementation", "Cloud Security"],
      challenge: "A rapidly growing fintech startup needed a highly secure, scalable, and compliant cloud infrastructure to support its payment processing platform, capable of handling fluctuating transaction volumes.",
      solution: "We designed and implemented a multi-account AWS architecture adhering to PCI-DSS standards. This included auto-scaling groups, serverless functions for event-driven processing, and robust security monitoring using AWS native services and third-party tools.",
      results: [
        "Achieved PCI-DSS Level 1 compliance",
        "Infrastructure scaled seamlessly to handle 5x peak transaction load",
        "Reduced infrastructure operational costs by 20% through optimization",
        "Improved deployment frequency by 4x with CI/CD pipelines"
      ],
      image_url: "/assets/case-studies/fintech-cloud.jpg",
      thumbnail_url: "/assets/case-studies/fintech-cloud-thumb.jpg",
      testimonial_quote: "Their cloud expertise was critical to our growth. We now have a robust platform that our customers trust.",
      technologies_used: ["AWS (EC2, S3, Lambda, RDS, CloudFormation)", "Docker", "Kubernetes (EKS)", "Terraform"],
      published_at: "2023-06-10"
    },
    {
      id: 3,
      title: "E-commerce Platform Revamp for Fashion Brand",
      slug: "ecommerce-revamp-fashion",
      client: "ChicStyle Apparel",
      industry: "Fashion & E-commerce",
      services_provided: ["Web Development", "UI/UX Design", "E-commerce Development"],
      challenge: "An established fashion brand had an outdated e-commerce site with poor user experience, slow performance, and declining conversion rates.",
      solution: "We conducted in-depth user research and redesigned the entire UI/UX, focusing on a mobile-first approach. The platform was re-developed using Next.js and a headless CMS, integrated with Shopify for backend e-commerce functionality. Performance optimization techniques were heavily employed.",
      results: [
        "40% increase in conversion rates",
        "60% improvement in page load times",
        "50% increase in mobile engagement",
        "Streamlined checkout process reducing cart abandonment by 25%"
      ],
      image_url: "/assets/case-studies/fashion-ecommerce.jpg",
      thumbnail_url: "/assets/case-studies/fashion-ecommerce-thumb.jpg",
      testimonial_quote: "Our new website is not just beautiful, it's a conversion machine! The team understood our brand and customers perfectly.",
      technologies_used: ["Next.js", "React", "Shopify API", "Contentful", "Vercel"],
      published_at: "2023-08-15"
    },
    {
      id: 4,
      title: "Data-Driven Marketing Strategy for B2B SaaS",
      slug: "marketing-b2b-saas",
      client: "SaaSPro Solutions",
      industry: "Software as a Service (SaaS)",
      services_provided: ["Digital Marketing", "Content Marketing", "SEO"],
      challenge: "A B2B SaaS company struggled to generate qualified leads and increase brand visibility in a competitive market.",
      solution: "We developed a comprehensive digital marketing strategy focusing on content marketing (blog posts, whitepapers, case studies), targeted LinkedIn advertising, and technical SEO optimization. A marketing automation system was implemented for lead nurturing.",
      results: [
        "200% increase in organic search traffic within 12 months",
        "75% growth in marketing qualified leads (MQLs)",
        "Reduced cost per lead by 30%",
        "Improved domain authority and search engine rankings for key terms"
      ],
      image_url: "/assets/case-studies/saas-marketing.jpg",
      thumbnail_url: "/assets/case-studies/saas-marketing-thumb.jpg",
      testimonial_quote: "Their marketing strategy put us on the map. We're now seeing consistent lead flow and a much stronger brand presence.",
      technologies_used: ["HubSpot", "Google Analytics", "SEMrush", "LinkedIn Ads"],
      published_at: "2023-05-01"
    }
  ])
}

export const fetchPortfolioBySlug = (slug) => { // Renaming to fetchCaseStudyBySlug
  return fetchPortfolios().then(portfolios => portfolios.find(portfolio => portfolio.slug === slug))
}
export const fetchCaseStudies = fetchPortfolios; // Alias for consistency
export const fetchCaseStudyBySlug = fetchPortfolioBySlug; // Alias for consistency


// Team Members
export const fetchTeamMembers = () => {
  return Promise.resolve([
    {
      id: 1,
      name: "Alice Wonderland",
      role: "CEO & Chief Strategist",
      bio: "Alice is a visionary leader with over 15 years of experience in driving technological innovation and business growth. She specializes in AI strategy and digital transformation.",
      image_url: "/team/alice.jpg",
      linkedin_url: "https://linkedin.com/in/alicewonderland",
      twitter_url: "https://twitter.com/alicewonderland",
      skills: ["AI Strategy", "Business Development", "Leadership", "Digital Transformation"]
    },
    {
      id: 2,
      name: "Bob The Builder",
      role: "CTO & Head of Engineering",
      bio: "Bob leads our engineering teams, ensuring the delivery of robust and scalable solutions. He has deep expertise in cloud architecture, DevOps, and full-stack development.",
      image_url: "/team/bob.jpg",
      linkedin_url: "https://linkedin.com/in/bobthebuilder",
      github_url: "https://github.com/bobthebuilder",
      skills: ["Cloud Architecture", "DevOps", "Software Engineering", "Team Management"]
    },
    {
      id: 3,
      name: "Carol Danvers",
      role: "Head of AI & Data Science",
      bio: "Carol is a leading expert in machine learning and artificial intelligence. She spearheads our AI research and development, transforming complex data into actionable insights.",
      image_url: "/team/carol.jpg",
      linkedin_url: "https://linkedin.com/in/caroldanvers",
      research_gate_url: "https://researchgate.net/profile/caroldanvers",
      skills: ["Machine Learning", "NLP", "Computer Vision", "Predictive Analytics", "Python", "R"]
    },
    {
      id: 4,
      name: "David Copperfield",
      role: "Lead UI/UX Designer",
      bio: "David creates magical user experiences. With a keen eye for detail and a user-centric approach, he transforms complex requirements into intuitive and engaging designs.",
      image_url: "/team/david.jpg",
      linkedin_url: "https://linkedin.com/in/davidcopperfield",
      dribbble_url: "https://dribbble.com/davidcopperfield",
      skills: ["UI Design", "UX Research", "Prototyping", "Interaction Design", "Figma", "Adobe XD"]
    },
    {
      id: 5,
      name: "Eve Moneypenny",
      role: "Head of Digital Marketing",
      bio: "Eve is a data-driven marketing guru, expert in crafting strategies that deliver measurable results. She leads our efforts in SEO, SEM, content marketing, and social media.",
      image_url: "/team/eve.jpg",
      linkedin_url: "https://linkedin.com/in/evemoneypenny",
      twitter_url: "https://twitter.com/evemoneypenny",
      skills: ["Digital Strategy", "SEO/SEM", "Content Marketing", "Social Media Marketing", "Analytics"]
    }
  ])
}


// FAQs
export const fetchFAQs = () => {
  return Promise.resolve([
    {
      id: 1,
      question: "What types of industries do you serve?",
      answer: "We serve a diverse range of industries including technology, finance (Fintech), retail, healthcare, manufacturing, and e-commerce. Our solutions are adaptable to various business needs and challenges.",
      category: "General"
    },
    {
      id: 2,
      question: "How do you ensure project success?",
      answer: "Project success is ensured through a combination of clear communication, agile methodologies, experienced project management, rigorous quality assurance, and a collaborative approach with our clients. We define clear KPIs and milestones at the outset.",
      category: "Process"
    },
    {
      id: 3,
      question: "What is your pricing model?",
      answer: "Our pricing model varies depending on the project scope, complexity, and services required. We offer flexible engagement models, including fixed-price projects, time and materials, and dedicated team retainers. We provide detailed proposals after an initial consultation.",
      category: "Pricing"
    },
    {
      id: 4,
      question: "How long does a typical project take?",
      answer: "Project timelines vary significantly based on the project's nature and scope. A small website might take a few weeks, while a complex AI solution or enterprise cloud migration could take several months. We provide estimated timelines after the discovery phase.",
      category: "Process"
    },
    {
      id: 5,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer ongoing support and maintenance services for all solutions we deliver. This can include technical support, security updates, performance monitoring, and feature enhancements, tailored to your needs.",
      category: "Services"
    },
    {
      id: 6,
      question: "How do you approach data security and privacy?",
      answer: "Data security and privacy are paramount. We adhere to industry best practices and relevant regulations (like GDPR, CCPA). Our approach includes secure coding practices, data encryption, access controls, regular security audits, and compliance with client-specific requirements.",
      category: "Security"
    },
    {
      id: 7,
      question: "Can you integrate your solutions with our existing systems?",
      answer: "Absolutely. We have extensive experience in integrating our solutions with a wide range of existing enterprise systems, CRMs, ERPs, and third-party APIs. Seamless integration is a key part of our development process.",
      category: "Services"
    }
  ])
}

// Careers
export const fetchCareers = () => {
  return Promise.resolve([
    {
      id: 1,
      title: "Senior AI Engineer",
      slug: "senior-ai-engineer",
      location: "Remote / New York, NY",
      type: "Full-time",
      department: "AI & Data Science",
      description: "We are seeking an experienced Senior AI Engineer to design, develop, and deploy cutting-edge AI/ML models. You will work on challenging projects, mentor junior engineers, and contribute to our AI strategy.",
      responsibilities: [
        "Lead the development of machine learning models from conception to deployment.",
        "Collaborate with cross-functional teams to define AI solutions for business problems.",
        "Research and implement state-of-the-art AI algorithms and techniques.",
        "Optimize models for performance, scalability, and accuracy.",
        "Mentor junior team members and promote best practices in AI development."
      ],
      qualifications: [
        "Master's or PhD in Computer Science, AI, or related field.",
        "5+ years of experience in developing and deploying ML models in production.",
        "Proficiency in Python and ML frameworks (e.g., TensorFlow, PyTorch, scikit-learn).",
        "Strong understanding of MLOps principles and tools.",
        "Excellent problem-solving and communication skills."
      ],
      posted_at: "2023-09-01",
      apply_link: "/careers/apply/senior-ai-engineer"
    },
    {
      id: 2,
      title: "Cloud Solutions Architect (AWS)",
      slug: "cloud-solutions-architect-aws",
      location: "Austin, TX (Hybrid)",
      type: "Full-time",
      department: "Cloud Services",
      description: "Join our Cloud Services team as a Solutions Architect specializing in AWS. You will be responsible for designing, implementing, and managing scalable, secure, and cost-effective cloud solutions for our clients.",
      responsibilities: [
        "Design and implement AWS cloud architectures based on client requirements.",
        "Lead cloud migration projects and provide technical guidance.",
        "Develop and implement DevOps strategies and CI/CD pipelines.",
        "Ensure cloud solutions adhere to security best practices and compliance standards.",
        "Provide pre-sales support and technical expertise to the sales team."
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or related field.",
        "AWS Certified Solutions Architect Professional certification.",
        "7+ years of experience in cloud architecture and AWS services.",
        "Strong experience with IaC tools (e.g., Terraform, CloudFormation).",
        "Expertise in networking, security, and database solutions on AWS."
      ],
      posted_at: "2023-08-25",
      apply_link: "/careers/apply/cloud-solutions-architect-aws"
    },
    {
      id: 3,
      title: "Full-Stack Web Developer (React/Node.js)",
      slug: "full-stack-web-developer-react-node",
      location: "Remote",
      type: "Full-time",
      department: "Web Development",
      description: "We are looking for a talented Full-Stack Web Developer proficient in React and Node.js to build and maintain innovative web applications. You will work on diverse projects, contributing to both frontend and backend development.",
      responsibilities: [
        "Develop responsive and user-friendly web interfaces using React and Next.js.",
        "Build robust and scalable backend APIs using Node.js and Express/NestJS.",
        "Collaborate with designers, product managers, and other developers.",
        "Write clean, maintainable, and well-tested code.",
        "Participate in code reviews and contribute to improving development processes."
      ],
      qualifications: [
        "Bachelor's degree in Computer Science or equivalent experience.",
        "3+ years of professional experience in full-stack web development.",
        "Strong proficiency in JavaScript/TypeScript, React, Node.js.",
        "Experience with databases (SQL/NoSQL) and RESTful/GraphQL APIs.",
        "Familiarity with Git, CI/CD, and agile methodologies."
      ],
      posted_at: "2023-09-05",
      apply_link: "/careers/apply/full-stack-web-developer-react-node"
    },
    {
      id: 4,
      title: "Digital Marketing Specialist",
      slug: "digital-marketing-specialist",
      location: "San Francisco, CA (On-site)",
      type: "Full-time",
      department: "Digital Marketing",
      description: "Seeking a creative and analytical Digital Marketing Specialist to develop and execute impactful marketing campaigns across various channels. You will help drive brand awareness, lead generation, and customer engagement.",
      responsibilities: [
        "Plan and execute SEO/SEM, email, social media, and display advertising campaigns.",
        "Measure and report performance of all digital marketing campaigns (ROI and KPIs).",
        "Conduct market research and analyze trends to identify new opportunities.",
        "Collaborate with content creators and designers to produce engaging assets.",
        "Manage marketing budgets and optimize spend for maximum impact."
      ],
      qualifications: [
        "Bachelor's degree in Marketing or related field.",
        "2-4 years of experience in digital marketing.",
        "Proven experience with SEO, SEM (Google Ads), social media marketing, and email marketing tools.",
        "Strong analytical skills and data-driven thinking (Google Analytics proficiency).",
        "Excellent communication and project management skills."
      ],
      posted_at: "2023-08-15",
      apply_link: "/careers/apply/digital-marketing-specialist"
    }
  ])
}

export const fetchCareerById = (id) => { // or by slug, depending on preference
  return fetchCareers().then(careers => careers.find(career => career.id === parseInt(id, 10))) // if using ID
}

export const fetchCareerBySlug = (slug) => {
  return fetchCareers().then(careers => careers.find(career => career.slug === slug))
}

// Mock data for success stories
const mockSuccessStories = [
  {
    id: 1,
    title: "Revolutionizing Customer Experience with AI",
    client_name: "Tech Innovators Inc.",
    industry: "Technology",
    image_url: "/assets/case-studies/retail-ai.jpg",
    excerpt: "Discover how AI transformed the customer support operations for Tech Innovators.",
    challenge: "Tech Innovators faced an overwhelming volume of customer queries, slowing down response times.",
    result: "AI-powered chatbots and automation led to a 30% increase in customer satisfaction.",
    slug: "ai-customer-experience",
  },
  {
    id: 2,
    title: "Enhancing Productivity with Cloud Solutions",
    client_name: "Global Enterprises",
    industry: "Business Solutions",
    image_url: "/assets/case-studies/fintech-cloud.jpg",
    excerpt: "Global Enterprises optimized its workflow with scalable cloud-based solutions.",
    challenge: "Outdated infrastructure was hindering productivity and collaboration among teams.",
    result: "The cloud implementation led to a 40% improvement in team collaboration and project delivery.",
    slug: "cloud-solutions-productivity",
  },
  {
    id: 3,
    title: "Boosting Sales with Data Analytics",
    client_name: "RetailX",
    industry: "Retail",
    image_url: "/assets/case-studies/saas-marketing.jpg",
    excerpt: "How RetailX leveraged data analytics to boost their sales by targeting high-value customers.",
    challenge: "RetailX struggled with targeting the right customers and tracking sales performance effectively.",
    result: "Data analytics tools provided actionable insights, driving a 25% increase in sales within three months.",
    slug: "data-analytics-sales",
  },
  // More mock data can be added here...
];

// Fetch Success Stories
export const fetchSuccessStories = async () => {
  try {
    // Simulate a delay to mimic API call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay

    // Return mock data as if fetched from a server
    return mockSuccessStories;
  } catch (error) {
    console.error("Error fetching success stories:", error);
    return [];
  }
};

export const fetchSuccessStoryBySlug = (slug) => { 
  return fetchSuccessStories().then(stories => stories.find(story => story.slug === slug))
}