// JavaScript Code - Robust Consolidated Version with Blog Functionality
document.addEventListener('DOMContentLoaded', function() {
    // ========== GLOBAL CONFIGURATION ==========
    const CONFIG = {
        animation: {
            duration: 500,
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        },
        breakpoints: {
            mobile: 768
        },
        blog: {
            postsPerPage: 4
        }
    };

// Add subtle animation to certification cards
document.addEventListener('DOMContentLoaded', function() {
    const certCards = document.querySelectorAll('.certification-card');
    
    certCards.forEach((card, index) => {
        // Add delay for staggered animation
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
});

    // ========== BLOG DATA ==========
    const blogPosts = [
        {
            id: 1,
            title: "The Future of SEO: How AI is Changing the Game",
            excerpt: "Discover how artificial intelligence is revolutionizing SEO strategies and what it means for your business.",
            date: "October 15, 2023",
            category: "AI SEO",
            readTime: "5 min read",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>The Future of SEO: How AI is Changing the Game</h1>
                <div class="blog-meta-full">
                    <span>October 15, 2023</span>
                    <span>AI SEO</span>
                    <span>5 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>Artificial Intelligence is no longer a futuristic concept—it's actively reshaping the SEO landscape. As an SEO specialist in Sri Lanka, I've witnessed firsthand how AI tools are transforming traditional optimization strategies.</p>
                    
                    <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="AI and SEO">
                    
                    <h2>How AI is Impacting SEO</h2>
                    <p>AI-powered tools can now analyze search patterns, user behavior, and content performance at a scale that was previously impossible. This allows for more precise targeting and optimization.</p>
                    
                    <h3>Key Areas Where AI is Making a Difference:</h3>
                    <ul>
                        <li><strong>Content Creation and Optimization:</strong> AI tools can generate topic ideas, optimize existing content, and even create drafts.</li>
                        <li><strong>Keyword Research:</strong> Advanced algorithms can identify semantic relationships and long-tail opportunities.</li>
                        <li><strong>Technical SEO:</strong> AI can crawl websites more efficiently, identifying issues that might be missed by traditional tools.</li>
                        <li><strong>User Experience Analysis:</strong> Machine learning can interpret user behavior signals to improve site structure and content.</li>
                    </ul>
                    
                    <h2>Implementing AI in Your SEO Strategy</h2>
                    <p>For Sri Lankan businesses looking to stay competitive, integrating AI into your SEO approach is becoming essential. Start by:</p>
                    <ol>
                        <li>Exploring AI-powered SEO tools that fit your budget and needs</li>
                        <li>Training your team on how to interpret AI-generated insights</li>
                        <li>Testing AI content generation while maintaining quality standards</li>
                        <li>Monitoring performance metrics to measure AI's impact</li>
                    </ol>
                    
                    <p>The future of SEO is intelligent, adaptive, and data-driven. By embracing AI technologies now, you can position your business for long-term success in the evolving digital landscape.</p>
                </div>
            `
        },
        {
            id: 2,
            title: "WordPress SEO: Complete Optimization Guide",
            excerpt: "Learn how to optimize your WordPress website for search engines with our comprehensive guide.",
            date: "October 10, 2023",
            category: "WordPress SEO",
            readTime: "8 min read",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>WordPress SEO: Complete Optimization Guide</h1>
                <div class="blog-meta-full">
                    <span>October 10, 2023</span>
                    <span>WordPress SEO</span>
                    <span>8 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>WordPress powers over 40% of all websites, making it crucial to understand how to optimize it properly for search engines. As a WordPress developer in Sri Lanka, I've helped numerous businesses achieve top rankings through proper WordPress SEO.</p>
                    
                    <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="WordPress SEO">
                    
                    <h2>Essential WordPress SEO Plugins</h2>
                    <p>While WordPress is SEO-friendly out of the box, the right plugins can significantly enhance your optimization efforts.</p>
                    
                    <h3>Must-Have SEO Plugins:</h3>
                    <ul>
                        <li><strong>Yoast SEO:</strong> Comprehensive SEO plugin with content analysis and XML sitemap generation</li>
                        <li><strong>Rank Math:</strong> Feature-rich alternative with built-in schema markup</li>
                        <li><strong>WP Rocket:</strong> Premium caching plugin for improved site speed</li>
                        <li><strong>Smush:</strong> Image optimization to reduce page load times</li>
                    </ul>
                    
                    <h2>Technical WordPress SEO</h2>
                    <p>Technical optimization forms the foundation of your WordPress SEO strategy.</p>
                    <ol>
                        <li><strong>Permalink Structure:</strong> Use post name structure for clean URLs</li>
                        <li><strong>XML Sitemaps:</strong> Ensure your sitemap is properly generated and submitted to Google</li>
                        <li><strong>Robots.txt:</strong> Configure properly to guide search engine crawlers</li>
                        <li><strong>Schema Markup:</strong> Implement structured data to enhance search appearances</li>
                        <li><strong>Mobile Optimization:</strong> Ensure your theme is fully responsive</li>
                    </ol>
                    
                    <p>By following these WordPress SEO best practices, you can significantly improve your website's visibility and organic traffic.</p>
                </div>
            `
        },
        {
            id: 3,
            title: "Local SEO Strategies for Sri Lankan Businesses",
            excerpt: "Dominate local search results with proven strategies tailored for the Sri Lankan market.",
            date: "October 5, 2023",
            category: "Local SEO",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1587334894133-d1d28a47c7dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>Local SEO Strategies for Sri Lankan Businesses</h1>
                <div class="blog-meta-full">
                    <span>October 5, 2023</span>
                    <span>Local SEO</span>
                    <span>6 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>Local SEO is crucial for businesses targeting customers in specific geographic locations. For Sri Lankan businesses, optimizing for local search can drive significant foot traffic and local inquiries.</p>
                    
                    <img src="https://images.unsplash.com/photo-1587334894133-d1d28a47c7dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Local SEO">
                    
                    <h2>Google Business Profile Optimization</h2>
                    <p>Your Google Business Profile is the cornerstone of local SEO. Ensure it's fully optimized with:</p>
                    
                    <ul>
                        <li>Accurate business name, address, and phone number (NAP)</li>
                        <li>High-quality photos of your business and products</li>
                        <li>Regular posts and updates</li>
                        <li>Encouraging and responding to customer reviews</li>
                        <li>Proper business categories and attributes</li>
                    </ul>
                    
                    <h2>Local Keyword Research for Sri Lanka</h2>
                    <p>Target location-specific keywords that Sri Lankan customers are searching for:</p>
                    
                    <ol>
                        <li>Include city and district names (Colombo, Kandy, Galle, etc.)</li>
                        <li>Use Sinhala and Tamil keywords where relevant</li>
                        <li>Target "near me" and "in [city]" search terms</li>
                        <li>Research local competitors' keyword strategies</li>
                    </ol>
                    
                    <h2>Local Citation Building</h2>
                    <p>Build consistent NAP citations across Sri Lankan business directories and local platforms.</p>
                    
                    <p>By implementing these local SEO strategies, Sri Lankan businesses can significantly improve their visibility to local customers searching for their products or services.</p>
                </div>
            `
        },
        {
            id: 4,
            title: "Technical SEO: The Complete Checklist",
            excerpt: "Master technical SEO with our comprehensive checklist covering everything from crawling to indexing.",
            date: "September 28, 2023",
            category: "Technical SEO",
            readTime: "10 min read",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>Technical SEO: The Complete Checklist</h1>
                <div class="blog-meta-full">
                    <span>September 28, 2023</span>
                    <span>Technical SEO</span>
                    <span>10 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>Technical SEO forms the foundation of your website's search engine visibility. Without proper technical implementation, even the best content may not rank well.</p>
                    
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Technical SEO">
                    
                    <h2>Crawlability and Indexing</h2>
                    <p>Ensure search engines can properly crawl and index your website:</p>
                    
                    <h3>Essential Checks:</h3>
                    <ul>
                        <li><strong>Robots.txt:</strong> Properly configured to guide crawlers</li>
                        <li><strong>XML Sitemaps:</strong> Comprehensive and submitted to Google Search Console</li>
                        <li><strong>URL Structure:</strong> Clean, logical, and canonicalized</li>
                        <li><strong>Status Codes:</strong> Proper HTTP status codes (200, 301, 404, etc.)</li>
                    </ul>
                    
                    <h2>Site Performance Optimization</h2>
                    <p>Site speed is a crucial ranking factor and user experience metric:</p>
                    <ol>
                        <li><strong>Core Web Vitals:</strong> Optimize LCP, FID, and CLS</li>
                        <li><strong>Server Response Time:</strong> Ensure fast server responses</li>
                        <li><strong>Image Optimization:</strong> Compress and properly format images</li>
                        <li><strong>Code Minification:</strong> Minify CSS, JavaScript, and HTML</li>
                        <li><strong>Caching:</strong> Implement proper browser and server caching</li>
                    </ol>
                    
                    <h2>Mobile-First Optimization</h2>
                    <p>With mobile-first indexing, mobile optimization is no longer optional:</p>
                    <ul>
                        <li>Responsive design that works on all devices</li>
                        <li>Touch-friendly interface elements</li>
                        <li>Optimized font sizes and spacing for mobile</li>
                        <li>Fast loading on mobile networks</li>
                    </ul>
                    
                    <p>By systematically working through this technical SEO checklist, you can ensure your website meets all the technical requirements for optimal search engine performance.</p>
                </div>
            `
        },
        {
            id: 5,
            title: "Content Strategy for SEO Success",
            excerpt: "Develop a winning content strategy that drives organic traffic and engages your target audience.",
            date: "September 20, 2023",
            category: "Content Strategy",
            readTime: "7 min read",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>Content Strategy for SEO Success</h1>
                <div class="blog-meta-full">
                    <span>September 20, 2023</span>
                    <span>Content Strategy</span>
                    <span>7 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>A well-planned content strategy is essential for long-term SEO success. Quality content not only ranks well but also engages and converts visitors.</p>
                    
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Content Strategy">
                    
                    <h2>Content Planning and Research</h2>
                    <p>Effective content strategy begins with thorough research and planning:</p>
                    
                    <h3>Key Research Areas:</h3>
                    <ul>
                        <li><strong>Keyword Research:</strong> Identify relevant, high-intent keywords</li>
                        <li><strong>Competitor Analysis:</strong> Analyze competitors' successful content</li>
                        <li><strong>Audience Research:</strong> Understand your target audience's needs and pain points</li>
                        <li><strong>Content Gap Analysis:</strong> Identify opportunities competitors are missing</li>
                    </ul>
                    
                    <h2>Content Creation Best Practices</h2>
                    <p>Create content that both search engines and users will love:</p>
                    <ol>
                        <li><strong>Comprehensive Coverage:</strong> Create pillar pages and cluster content</li>
                        <li><strong>User Intent Focus:</strong> Match content to searcher intent</li>
                        <li><strong>Quality Over Quantity:</strong> Focus on creating valuable, in-depth content</li>
                        <li><strong>Visual Elements:</strong> Include images, videos, and infographics</li>
                        <li><strong>Readability:</strong> Use clear formatting, headings, and short paragraphs</li>
                    </ol>
                    
                    <h2>Content Promotion and Distribution</h2>
                    <p>Creating great content isn't enough—you need to promote it effectively:</p>
                    <ul>
                        <li>Share on relevant social media platforms</li>
                        <li>Email newsletters to your subscriber list</li>
                        <li>Outreach to industry influencers and websites</li>
                        <li>Repurpose content into different formats</li>
                        <li>Internal linking from existing high-traffic pages</li>
                    </ul>
                    
                    <p>By implementing a comprehensive content strategy, you can build sustainable organic traffic and establish your website as an authority in your industry.</p>
                </div>
            `
        },
        {
            id: 6,
            title: "E-commerce SEO: Driving Traffic and Sales",
            excerpt: "Optimize your online store for search engines to increase visibility, traffic, and conversions.",
            date: "September 15, 2023",
            category: "E-commerce SEO",
            readTime: "6 min read",
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            content: `
                <h1>E-commerce SEO: Driving Traffic and Sales</h1>
                <div class="blog-meta-full">
                    <span>September 15, 2023</span>
                    <span>E-commerce SEO</span>
                    <span>6 min read</span>
                </div>
                <div class="blog-article-content">
                    <p>E-commerce SEO presents unique challenges and opportunities. With the right approach, you can significantly increase organic traffic and sales for your online store.</p>
                    
                    <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="E-commerce SEO">
                    
                    <h2>E-commerce SEO Fundamentals</h2>
                    <p>Successful e-commerce SEO requires attention to both technical elements and content strategy tailored to commercial intent.</p>
                    
                    <h3>Key E-commerce SEO Components:</h3>
                    <ul>
                        <li><strong>Product Page Optimization:</strong> Create unique, compelling product descriptions with relevant keywords</li>
                        <li><strong>Category Page Strategy:</strong> Develop category pages that serve as comprehensive resource hubs</li>
                        <li><strong>Site Architecture:</strong> Implement a logical hierarchy that helps users and search engines navigate your store</li>
                        <li><strong>Internal Linking:</strong> Connect related products and categories to distribute authority</li>
                    </ul>
                    
                    <h2>Technical Considerations for E-commerce Sites</h2>
                    <p>E-commerce platforms often introduce specific technical challenges:</p>
                    <ol>
                        <li><strong>Duplicate Content:</strong> Manage product variations, filtered pages, and session IDs</li>
                        <li><strong>Faceted Navigation:</strong> Implement proper handling of filter and sort parameters</li>
                        <li><strong>Pagination:</strong> Use rel="next" and rel="prev" tags for paginated category pages</li>
                        <li><strong>Site Speed:</strong> Optimize for fast loading, especially on product and checkout pages</li>
                        <li><strong>Structured Data:</strong> Implement product schema markup to enhance search appearances</li>
                    </ol>
                    
                    <h2>Content Strategy for E-commerce</h2>
                    <p>Beyond product pages, develop additional content to attract and engage customers:</p>
                    <ul>
                        <li>Buying guides and product comparison articles</li>
                        <li>How-to content related to your products</li>
                        <li>Blog posts addressing customer questions and pain points</li>
                        <li>Seasonal and trend-based content</li>
                    </ul>
                    
                    <h2>Measuring E-commerce SEO Success</h2>
                    <p>Track these key metrics to evaluate your e-commerce SEO performance:</p>
                    <ul>
                        <li>Organic traffic to product and category pages</li>
                        <li>Conversion rates from organic search</li>
                        <li>Average order value from organic visitors</li>
                        <li>Return on investment from SEO activities</li>
                    </ul>
                    
                    <p>By implementing a comprehensive e-commerce SEO strategy, online stores can reduce their dependence on paid advertising, build sustainable traffic sources, and increase profitability.</p>
                </div>
            `
        },
        {
        id: 7,
        title: "Voice Search Optimization: Preparing for the Future",
        excerpt: "Learn how voice search is changing SEO and how to optimize your content for voice-activated devices and digital assistants.",
        date: "November 5, 2023",
        category: "Voice SEO",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Voice Search Optimization: Preparing for the Future</h1>
            <div class="blog-meta-full">
                <span>November 5, 2023</span>
                <span>Voice SEO</span>
                <span>7 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Voice search is rapidly becoming a dominant way people interact with search engines. With the rise of smart speakers and voice assistants, optimizing for voice search is no longer optional—it's essential.</p>
                
                <img src="https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Voice Search">
                
                <h2>How Voice Search Differs from Traditional Search</h2>
                <p>Voice search queries are fundamentally different from typed searches. They tend to be longer, more conversational, and question-based.</p>
                
                <h3>Key Differences:</h3>
                <ul>
                    <li><strong>Natural Language:</strong> Voice searches use complete sentences and questions</li>
                    <li><strong>Local Intent:</strong> "Near me" searches are extremely common</li>
                    <li><strong>Mobile-First:</strong> Most voice searches happen on mobile devices</li>
                    <li><strong>Immediate Answers:</strong> Users expect direct, concise responses</li>
                </ul>
                
                <h2>Voice Search Optimization Strategies</h2>
                <p>Optimizing for voice search requires a different approach than traditional SEO.</p>
                
                <h3>Essential Voice SEO Tactics:</h3>
                <ol>
                    <li><strong>Focus on Question-Based Keywords:</strong> Target "who, what, when, where, why, how" questions</li>
                    <li><strong>Create FAQ Content:</strong> Develop comprehensive question-and-answer pages</li>
                    <li><strong>Optimize for Featured Snippets:</strong> Voice assistants often read from featured snippets</li>
                    <li><strong>Improve Page Speed:</strong> Fast-loading pages are prioritized for voice results</li>
                    <li><strong>Local SEO Optimization:</strong> Ensure your Google Business Profile is fully optimized</li>
                </ol>
                
                <h2>Structured Data for Voice Search</h2>
                <p>Implementing proper schema markup helps search engines understand your content better, increasing chances of being selected for voice answers.</p>
                
                <p>By implementing these voice search optimization strategies, you can position your website for success in the evolving search landscape and capture traffic from this growing segment.</p>
            </div>
        `
    },
    {
        id: 8,
        title: "Core Web Vitals: Mastering Page Experience Signals",
        excerpt: "Understand Google's Core Web Vitals and learn how to optimize your website for better user experience and rankings.",
        date: "November 12, 2023",
        category: "Technical SEO",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Core Web Vitals: Mastering Page Experience Signals</h1>
            <div class="blog-meta-full">
                <span>November 12, 2023</span>
                <span>Technical SEO</span>
                <span>8 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Core Web Vitals have become crucial ranking factors that directly impact your website's visibility and user experience. Understanding and optimizing these metrics is essential for modern SEO success.</p>
                
                <h2>Understanding the Three Core Web Vitals</h2>
                
                <h3>Largest Contentful Paint (LCP)</h3>
                <p>LCP measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</p>
                
                <h3>First Input Delay (FID)</h3>
                <p>FID measures interactivity. For a good user experience, pages should have a FID of less than 100 milliseconds.</p>
                
                <h3>Cumulative Layout Shift (CLS)</h3>
                <p>CLS measures visual stability. Pages should maintain a CLS of less than 0.1 for optimal user experience.</p>
                
                <h2>Practical Optimization Strategies</h2>
                
                <h3>Improving LCP:</h3>
                <ul>
                    <li>Optimize and compress images</li>
                    <li>Implement lazy loading</li>
                    <li>Use a content delivery network (CDN)</li>
                    <li>Remove render-blocking resources</li>
                </ul>
                
                <h3>Reducing FID:</h3>
                <ul>
                    <li>Minimize JavaScript execution time</li>
                    <li>Break up long tasks</li>
                    <li>Use a web worker</li>
                    <li>Optimize your page for interaction readiness</li>
                </ul>
                
                <h2>Monitoring and Maintenance</h2>
                <p>Regular monitoring using tools like Google Search Console, PageSpeed Insights, and Core Web Vitals report is essential for maintaining optimal performance.</p>
            </div>
        `
    },
    {
        id: 9,
        title: "Schema Markup: Boost Your SEO with Structured Data",
        excerpt: "Discover how to implement schema markup to enhance your search appearances and increase click-through rates.",
        date: "November 18, 2023",
        category: "Technical SEO",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Schema Markup: Boost Your SEO with Structured Data</h1>
            <div class="blog-meta-full">
                <span>November 18, 2023</span>
                <span>Technical SEO</span>
                <span>6 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Schema markup is a powerful SEO tool that helps search engines understand your content better, leading to enhanced search appearances and improved click-through rates.</p>
                
                <h2>What is Schema Markup?</h2>
                <p>Schema.org vocabulary is a structured data vocabulary that helps search engines understand the information on web pages and provide richer search results.</p>
                
                <h2>Benefits of Implementing Schema Markup</h2>
                <ul>
                    <li><strong>Rich Snippets:</strong> Enhanced search results with additional information</li>
                    <li><strong>Better Understanding:</strong> Helps search engines comprehend your content</li>
                    <li><strong>Voice Search Optimization:</strong> Improves performance in voice search results</li>
                    <li><strong>Competitive Advantage:</strong> Many websites still don't use schema markup</li>
                </ul>
                
                <h2>Common Schema Types and Their Implementation</h2>
                
                <h3>Article Schema</h3>
                <p>Perfect for blog posts and news articles, providing information about the headline, author, date published, and images.</p>
                
                <h3>Local Business Schema</h3>
                <p>Essential for brick-and-mortar businesses, including address, phone number, business hours, and geo-coordinates.</p>
                
                <h3>Product Schema</h3>
                <p>For e-commerce sites, including price, availability, reviews, and product specifications.</p>
                
                <h2>Implementation Best Practices</h2>
                <p>Follow these guidelines for successful schema implementation:</p>
                <ol>
                    <li>Use JSON-LD format for easier implementation</li>
                    <li>Test your markup with Google's Rich Results Test</li>
                    <li>Only mark up content that's visible to users</li>
                    <li>Keep your schema updated with content changes</li>
                </ol>
            </div>
        `
    },
    {
        id: 10,
        title: "YouTube SEO: Ranking Your Videos in Search Results",
        excerpt: "Learn proven strategies to optimize your YouTube videos for better visibility in both YouTube and Google search results.",
        date: "November 25, 2023",
        category: "Video SEO",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>YouTube SEO: Ranking Your Videos in Search Results</h1>
            <div class="blog-meta-full">
                <span>November 25, 2023</span>
                <span>Video SEO</span>
                <span>9 min read</span>
            </div>
            <div class="blog-article-content">
                <p>YouTube is the second largest search engine in the world, and optimizing your videos can drive significant traffic to your channel and website.</p>
                
                <h2>YouTube SEO Fundamentals</h2>
                <p>YouTube's algorithm considers numerous factors when ranking videos, and understanding these can significantly improve your visibility.</p>
                
                <h3>Key Ranking Factors:</h3>
                <ul>
                    <li><strong>Title Optimization:</strong> Include primary keywords at the beginning</li>
                    <li><strong>Description Quality:</strong> Write comprehensive, keyword-rich descriptions</li>
                    <li><strong>Tags and Categories:</strong> Use relevant tags and proper categorization</li>
                    <li><strong>Engagement Metrics:</strong> Watch time, likes, comments, and shares</li>
                </ul>
                
                <h2>Advanced YouTube Optimization Strategies</h2>
                
                <h3>Thumbnail Optimization</h3>
                <p>Create compelling thumbnails that stand out in search results and suggested videos.</p>
                
                <h3>Video Chapters and Timestamps</h3>
                <p>Use timestamps to create chapters, making your content more user-friendly and searchable.</p>
                
                <h3>Closed Captions and Transcripts</h3>
                <p>Add accurate closed captions to improve accessibility and provide additional text for search engines to index.</p>
                
                <h2>Promoting Your YouTube Content</h2>
                <p>Effective promotion is crucial for YouTube success:</p>
                <ol>
                    <li>Share videos on relevant social media platforms</li>
                    <li>Embed videos in related blog posts</li>
                    <li>Collaborate with other creators in your niche</li>
                    <li>Use YouTube's community features</li>
                </ol>
            </div>
        `
    },
    {
        id: 11,
        title: "International SEO: Expanding Your Global Reach",
        excerpt: "Master international SEO strategies to target multiple countries and languages while avoiding common pitfalls.",
        date: "December 2, 2023",
        category: "International SEO",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>International SEO: Expanding Your Global Reach</h1>
            <div class="blog-meta-full">
                <span>December 2, 2023</span>
                <span>International SEO</span>
                <span>10 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Expanding your website's reach to international audiences requires careful planning and implementation of specific SEO strategies tailored to different countries and languages.</p>
                
                <h2>International SEO Implementation Methods</h2>
                
                <h3>Country-Targeting Approaches</h3>
                <ul>
                    <li><strong>ccTLDs (Country Code Top-Level Domains):</strong> .lk for Sri Lanka, .uk for UK, etc.</li>
                    <li><strong>Subdirectories with gTLD:</strong> example.com/lk/ for Sri Lankan content</li>
                    <li><strong>Subdomains with gTLD:</strong> lk.example.com for country-specific content</li>
                </ul>
                
                <h2>Technical Implementation</h2>
                
                <h3>hreflang Annotations</h3>
                <p>Proper implementation of hreflang tags is crucial for telling search engines about your international content variations.</p>
                
                <h3>Geographic Targeting in Search Console</h3>
                <p>Use Google Search Console to specify which country your website or specific sections should target.</p>
                
                <h2>Content and Cultural Considerations</h2>
                <p>Successful international SEO goes beyond technical implementation:</p>
                <ul>
                    <li>Localize content for cultural relevance</li>
                    <li>Consider local search habits and preferences</li>
                    <li>Adapt to local payment methods and currencies</li>
                    <li>Understand local legal requirements</li>
                </ul>
            </div>
        `
    },
    {
        id: 12,
        title: "Google Analytics 4: Mastering the New Platform",
        excerpt: "Get up to speed with Google Analytics 4 and learn how to track and analyze your SEO performance effectively.",
        date: "December 9, 2023",
        category: "Analytics",
        readTime: "11 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Google Analytics 4: Mastering the New Platform</h1>
            <div class="blog-meta-full">
                <span>December 9, 2023</span>
                <span>Analytics</span>
                <span>11 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Google Analytics 4 represents a fundamental shift in how we track and analyze website performance. Understanding its new features and capabilities is essential for modern SEO professionals.</p>
                
                <h2>Key Differences Between Universal Analytics and GA4</h2>
                
                <h3>Event-Based Tracking</h3>
                <p>GA4 uses an event-based model rather than session-based, providing more flexible and comprehensive tracking.</p>
                
                <h3>Enhanced Cross-Platform Tracking</h3>
                <p>Better tracking across websites, apps, and offline interactions provides a more complete customer journey view.</p>
                
                <h2>Essential GA4 Setup for SEO</h2>
                
                <h3>Configuring Key Events</h3>
                <p>Set up conversion events that matter for your SEO strategy:</p>
                <ul>
                    <li>Form submissions</li>
                    <li>Phone calls</li>
                    <li>File downloads</li>
                    <li>Video engagement</li>
                </ul>
                
                <h3>Creating Custom Dimensions</h3>
                <p>Track SEO-specific metrics like:</p>
                <ul>
                    <li>Author names</li>
                    <li>Content categories</li>
                    <li>Word count ranges</li>
                    <li>Publication dates</li>
                </ul>
                
                <h2>Advanced GA4 Features for SEO Analysis</h2>
                <p>Leverage GA4's powerful features for deeper SEO insights:</p>
                <ol>
                    <li>Exploration reports for custom analysis</li>
                    <li>Path analysis for user journey mapping</li>
                    <li>Segment overlap for audience insights</li>
                    <li>Custom funnels for conversion optimization</li>
                </ol>
            </div>
        `
    },
    {
        id: 13,
        title: "Featured Snippets: How to Capture Position Zero",
        excerpt: "Learn proven strategies to optimize your content for featured snippets and dominate the 'position zero' in search results.",
        date: "December 16, 2023",
        category: "Content Strategy",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Featured Snippets: How to Capture Position Zero</h1>
            <div class="blog-meta-full">
                <span>December 16, 2023</span>
                <span>Content Strategy</span>
                <span>7 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Featured snippets, also known as 'position zero,' provide an incredible opportunity to dominate search results and drive massive traffic to your website.</p>
                
                <h2>Types of Featured Snippets</h2>
                
                <h3>Paragraph Snippets</h3>
                <p>The most common type, featuring a text excerpt that directly answers a user's question.</p>
                
                <h3>List Snippets</h3>
                <p>Numbered or bulleted lists that provide step-by-step instructions or itemized information.</p>
                
                <h3>Table Snippets</h3>
                <p>Structured data presented in table format, perfect for comparisons and data-heavy content.</p>
                
                <h2>Optimization Strategies for Featured Snippets</h2>
                
                <h3>Content Structure Optimization</h3>
                <ul>
                    <li>Use clear, concise headings and subheadings</li>
                    <li>Structure content in a question-and-answer format</li>
                    <li>Use tables for comparative data</li>
                    <li>Create numbered lists for step-by-step processes</li>
                </ul>
                
                <h3>Keyword Research for Snippets</h3>
                <p>Target question-based keywords and informational queries that are likely to trigger featured snippets.</p>
                
                <h2>Monitoring and Maintenance</h2>
                <p>Regularly monitor your featured snippet performance and update content to maintain your position.</p>
            </div>
        `
    },
    {
        id: 14,
        title: "Mobile-First Indexing: Complete Optimization Guide",
        excerpt: "Ensure your website is fully optimized for mobile-first indexing with our comprehensive checklist and best practices.",
        date: "December 23, 2023",
        category: "Mobile SEO",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Mobile-First Indexing: Complete Optimization Guide</h1>
            <div class="blog-meta-full">
                <span>December 23, 2023</span>
                <span>Mobile SEO</span>
                <span>8 min read</span>
            </div>
            <div class="blog-article-content">
                <p>With mobile-first indexing, Google primarily uses the mobile version of your content for indexing and ranking. Ensuring mobile optimization is no longer optional—it's critical for SEO success.</p>
                
                <h2>Mobile-First Indexing Checklist</h2>
                
                <h3>Technical Requirements</h3>
                <ul>
                    <li>Responsive design implementation</li>
                    <li>Fast loading speeds on mobile devices</li>
                    <li>Proper viewport configuration</li>
                    <li>Accessible touch elements and navigation</li>
                </ul>
                
                <h3>Content Parity</h3>
                <p>Ensure mobile and desktop versions have the same content, including:</p>
                <ul>
                    <li>Text content</li>
                    <li>Images and videos</li>
                    <li>Structured data</li>
                    <li>Metadata</li>
                </ul>
                
                <h2>Advanced Mobile Optimization Techniques</h2>
                
                <h3>Progressive Web App (PWA) Features</h3>
                <p>Implement PWA features for enhanced mobile user experience:</p>
                <ol>
                    <li>Add to home screen capability</li>
                    <li>Offline functionality</li>
                    <li>Push notifications</li>
                    <li>Fast loading from cache</li>
                </ol>
                
                <h3>Mobile User Experience Optimization</h3>
                <p>Focus on creating exceptional mobile experiences:</p>
                <ul>
                    <li>Simplify navigation for touch interfaces</li>
                    <li>Optimize forms for mobile input</li>
                    <li>Ensure readable text without zooming</li>
                    <li>Test across various mobile devices</li>
                </ul>
            </div>
        `
    },
    {
        id: 15,
        title: "SEO for Service-Based Businesses: Local Dominance",
        excerpt: "Specialized SEO strategies for service-based businesses looking to dominate local search results and generate qualified leads.",
        date: "December 30, 2023",
        category: "Local SEO",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>SEO for Service-Based Businesses: Local Dominance</h1>
            <div class="blog-meta-full">
                <span>December 30, 2023</span>
                <span>Local SEO</span>
                <span>9 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Service-based businesses have unique SEO needs that differ from e-commerce or content websites. Mastering local SEO is crucial for attracting qualified customers in your service area.</p>
                
                <h2>Service Area Business SEO Strategy</h2>
                
                <h3>Google Business Profile Optimization</h3>
                <p>Complete optimization of your GBP listing is non-negotiable for service businesses:</p>
                <ul>
                    <li>Accurate service area specifications</li>
                    <li>Complete business information</li>
                    <li>High-quality photos of your work</li>
                    <li>Regular posts and updates</li>
                </ul>
                
                <h3>Local Citation Building</h3>
                <p>Build consistent NAP citations across local directories and industry-specific platforms.</p>
                
                <h2>Content Strategy for Service Businesses</h2>
                
                <h3>Service Page Optimization</h3>
                <p>Create dedicated, optimized pages for each service you offer with:</p>
                <ul>
                    <li>Detailed service descriptions</li>
                    <li>Before-and-after photos</li>
                    <li>Customer testimonials</li>
                    <li>Clear calls-to-action</li>
                </ul>
                
                <h3>Local Content Creation</h3>
                <p>Develop content that targets local customers and demonstrates your expertise:</p>
                <ol>
                    <li>"Service in [City]" pages</li>
                    <li>Local case studies</li>
                    <li>Community involvement content</li>
                    <li>Local news and events coverage</li>
                </ol>
            </div>
        `
    },
    {
        id: 16,
        title: "Competitor Analysis: Reverse Engineering SEO Success",
        excerpt: "Learn how to analyze your competitors' SEO strategies and identify opportunities to outperform them in search results.",
        date: "January 6, 2024",
        category: "SEO Strategy",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>Competitor Analysis: Reverse Engineering SEO Success</h1>
            <div class="blog-meta-full">
                <span>January 6, 2024</span>
                <span>SEO Strategy</span>
                <span>10 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Understanding your competitors' SEO strategies provides invaluable insights that can help you identify opportunities and avoid costly mistakes in your own optimization efforts.</p>
                
                <h2>Identifying Your True Competitors</h2>
                <p>Not all competitors in your industry are your SEO competitors. Identify websites that actually compete for your target keywords.</p>
                
                <h2>Comprehensive Competitor Analysis Framework</h2>
                
                <h3>Technical SEO Analysis</h3>
                <ul>
                    <li>Site architecture and URL structure</li>
                    <li>Page speed performance</li>
                    <li>Mobile optimization</li>
                    <li>Structured data implementation</li>
                </ul>
                
                <h3>Content Strategy Analysis</h3>
                <ul>
                    <li>Content gaps and opportunities</li>
                    <li>Content format and quality</li>
                    <li>Update frequency and freshness</li>
                    <li>Content promotion strategies</li>
                </ul>
                
                <h3>Backlink Profile Analysis</h3>
                <p>Analyze competitors' backlink profiles to identify link-building opportunities:</p>
                <ol>
                    <li>Identify their top referring domains</li>
                    <li>Analyze anchor text distribution</li>
                    <li>Find unlinked brand mentions</li>
                    <li>Discover guest posting opportunities</li>
                </ol>
                
                <h2>Turning Analysis into Action</h2>
                <p>Develop a strategic plan based on your competitor analysis findings to outperform them in search results.</p>
            </div>
        `
    },
    {
        id: 17,
        title: "E-A-T Optimization: Building Trust and Authority",
        excerpt: "Master Google's E-A-T principles to build trust with both users and search engines, improving your rankings and credibility.",
        date: "January 13, 2024",
        category: "Content Strategy",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>E-A-T Optimization: Building Trust and Authority</h1>
            <div class="blog-meta-full">
                <span>January 13, 2024</span>
                <span>Content Strategy</span>
                <span>8 min read</span>
            </div>
            <div class="blog-article-content">
                <p>E-A-T (Expertise, Authoritativeness, Trustworthiness) has become increasingly important in Google's ranking algorithms, particularly for YMYL (Your Money Your Life) websites.</p>
                
                <h2>Understanding E-A-T Components</h2>
                
                <h3>Expertise</h3>
                <p>Demonstrate your knowledge and qualifications in your field through comprehensive, accurate content.</p>
                
                <h3>Authoritativeness</h3>
                <p>Build your reputation as a go-to source in your industry through citations, mentions, and recognition.</p>
                
                <h3>Trustworthiness</h3>
                <p>Establish credibility through transparent business practices, secure website, and honest content.</p>
                
                <h2>E-A-T Optimization Strategies</h2>
                
                <h3>Author Bio Optimization</h3>
                <p>Create detailed author biographies that establish expertise and credibility.</p>
                
                <h3>Content Quality Signals</h3>
                <ul>
                    <li>Comprehensive coverage of topics</li>
                    <li>Accurate, up-to-date information</li>
                    <li>Proper sourcing and citations</li>
                    <li>Clear content organization</li>
                </ul>
                
                <h3>External Validation</h3>
                <p>Build signals of authority through:</p>
                <ol>
                    <li>Industry recognition and awards</li>
                    <li>Media mentions and features</li>
                    <li>Expert contributions to other sites</li>
                    <li>Professional certifications and affiliations</li>
                </ol>
            </div>
        `
    },
    {
        id: 18,
        title: "SEO Project Management: Scaling Your Optimization Efforts",
        excerpt: "Learn effective project management techniques for SEO campaigns, from planning and execution to measurement and reporting.",
        date: "January 20, 2024",
        category: "SEO Strategy",
        readTime: "11 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>SEO Project Management: Scaling Your Optimization Efforts</h1>
            <div class="blog-meta-full">
                <span>January 20, 2024</span>
                <span>SEO Strategy</span>
                <span>11 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Effective project management is crucial for scaling SEO efforts and achieving consistent, measurable results. Learn how to structure and manage SEO projects for maximum efficiency and impact.</p>
                
                <h2>SEO Project Planning Framework</h2>
                
                <h3>Goal Setting and KPIs</h3>
                <p>Establish clear, measurable goals and key performance indicators for your SEO projects.</p>
                
                <h3>Resource Allocation</h3>
                <p>Properly allocate resources across technical, content, and link-building activities based on priority and impact.</p>
                
                <h2>SEO Project Management Tools and Methodologies</h2>
                
                <h3>Agile SEO Methodology</h3>
                <p>Adapt agile project management principles for SEO campaigns:</p>
                <ul>
                    <li>Sprint planning and execution</li>
                    <li>Regular progress reviews</li>
                    <li>Flexible adaptation to algorithm changes</li>
                    <li>Continuous improvement cycles</li>
                </ul>
                
                <h3>Essential SEO Project Management Tools</h3>
                <ol>
                    <li>Project management platforms (Asana, Trello, Jira)</li>
                    <li>SEO tracking and reporting tools</li>
                    <li>Communication and collaboration platforms</li>
                    <li>Documentation and knowledge base systems</li>
                </ol>
                
                <h2>Measuring SEO Project Success</h2>
                <p>Implement robust measurement frameworks to track project success and demonstrate ROI to stakeholders.</p>
            </div>
        `
    },
    {
        id: 19,
        title: "SEO Project Management: Scaling Your Optimization Efforts",
        excerpt: "Learn effective project management techniques for SEO campaigns, from planning and execution to measurement and reporting.",
        date: "January 20, 2024",
        category: "SEO Strategy",
        readTime: "11 min read",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        content: `
            <h1>SEO Project Management: Scaling Your Optimization Efforts</h1>
            <div class="blog-meta-full">
                <span>January 20, 2024</span>
                <span>SEO Strategy</span>
                <span>11 min read</span>
            </div>
            <div class="blog-article-content">
                <p>Effective project management is crucial for scaling SEO efforts and achieving consistent, measurable results. Learn how to structure and manage SEO projects for maximum efficiency and impact.</p>
                
                <h2>SEO Project Planning Framework</h2>
                
                <h3>Goal Setting and KPIs</h3>
                <p>Establish clear, measurable goals and key performance indicators for your SEO projects.</p>
                
                <h3>Resource Allocation</h3>
                <p>Properly allocate resources across technical, content, and link-building activities based on priority and impact.</p>
                
                <h2>SEO Project Management Tools and Methodologies</h2>
                
                <h3>Agile SEO Methodology</h3>
                <p>Adapt agile project management principles for SEO campaigns:</p>
                <ul>
                    <li>Sprint planning and execution</li>
                    <li>Regular progress reviews</li>
                    <li>Flexible adaptation to algorithm changes</li>
                    <li>Continuous improvement cycles</li>
                </ul>
                
                <h3>Essential SEO Project Management Tools</h3>
                <ol>
                    <li>Project management platforms (Asana, Trello, Jira)</li>
                    <li>SEO tracking and reporting tools</li>
                    <li>Communication and collaboration platforms</li>
                    <li>Documentation and knowledge base systems</li>
                </ol>
                
                <h2>Measuring SEO Project Success</h2>
                <p>Implement robust measurement frameworks to track project success and demonstrate ROI to stakeholders.</p>
            </div>
        `
    }
    ]

    // ========== UTILITY FUNCTIONS ==========
    const utils = {
        // Check if element is in viewport
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        },

        // Validate email
        validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),

        // Validate URL
        validateURL: (url) => {
            try {
                new URL(url);
                return true;
            } catch (_) {
                return false;
            }
        },

        // Smooth scroll to element
        smoothScroll: (targetId) => {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },

        // Debounce function for performance
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Get post ID from URL or default to first post
        getPostIdFromUrl: () => {
            const urlParams = new URLSearchParams(window.location.search);
            const postId = parseInt(urlParams.get('post'));
            return postId && !isNaN(postId) ? postId : 1;
        },

        // Update URL without page reload
        updateUrl: (postId) => {
            const newUrl = `${window.location.pathname}?post=${postId}`;
            window.history.pushState({ postId: postId }, '', newUrl);
        }
    };

    // ========== NOTIFICATION SYSTEM ==========
    const notification = {
        show: (message, type = 'success') => {
            // Remove existing notifications
            document.querySelectorAll('.notification').forEach(notification => notification.remove());
            
            // Create new notification
            const notificationEl = document.createElement('div');
            notificationEl.className = `notification ${type}`;
            notificationEl.textContent = message;
            
            document.body.appendChild(notificationEl);
            
            // Animate in
            setTimeout(() => notificationEl.classList.add('show'), 100);
            
            // Remove after 5 seconds
            setTimeout(() => {
                notificationEl.classList.remove('show');
                setTimeout(() => notificationEl.remove(), 300);
            }, 5000);
        }
    };

    // ========== BLOG SYSTEM ==========
    const blogSystem = {
        currentRelatedPage: 1,
        isBlogPage: false,
        currentPostId: null,

        init: function() {
            // Check if we're on a blog page
            this.isBlogPage = document.getElementById('blogContent') !== null;
            
            if (!this.isBlogPage) return;

            this.setupBlogEventListeners();
            this.initializeBlog();
        },

        setupBlogEventListeners: function() {
            // Handle browser back/forward buttons
            window.addEventListener('popstate', (event) => {
                if (event.state && event.state.postId) {
                    this.loadBlogPost(event.state.postId);
                }
            });

            // Close mobile menu when clicking on blog links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    const navLinks = document.querySelector('.nav-links');
                    const hamburger = document.querySelector('.hamburger');
                    if (navLinks && navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                        hamburger.classList.remove('active');
                    }
                });
            });
        },

        initializeBlog: function() {
            const initialPostId = utils.getPostIdFromUrl();
            this.currentPostId = initialPostId;
            this.loadBlogPost(initialPostId);
        },

        loadBlogPost: function(postId) {
            const blogContent = document.getElementById('blogContent');
            if (!blogContent) return;

            // Find the post
            const post = blogPosts.find(p => p.id === postId);
            if (!post) {
                console.error('Blog post not found:', postId);
                return;
            }

            // Update current post ID
            this.currentPostId = postId;

            // Update URL without reloading page
            utils.updateUrl(postId);

            // Update page title
            document.title = `${post.title} | SEO Specialist Portfolio`;

            // Render blog content
            blogContent.innerHTML = post.content;

            // Load related posts
            this.loadRelatedPosts(postId);

            // Add scroll animation to new content
            setTimeout(() => {
                const animatedElements = blogContent.querySelectorAll('h1, h2, h3, p, img, ul, ol');
                animatedElements.forEach((el, index) => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(20px)';
                    el.style.transition = `opacity ${CONFIG.animation.duration}ms ease ${index * 100}ms, transform ${CONFIG.animation.duration}ms ease ${index * 100}ms`;
                    
                    setTimeout(() => {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }, 100);
                });
            }, 100);

            // Scroll to top of article
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        loadRelatedPosts: function(currentPostId, page = 1) {
            const relatedPostsGrid = document.getElementById('relatedPostsGrid');
            const pagination = document.getElementById('pagination');
            
            if (!relatedPostsGrid) {
                console.error('Related posts grid element not found');
                return;
            }

            this.currentRelatedPage = page;
            
            // Get all posts except current one
            let relatedPosts = blogPosts.filter(post => post.id !== currentPostId);
            
            // Calculate pagination
            const totalPages = Math.ceil(relatedPosts.length / CONFIG.blog.postsPerPage);
            const startIndex = (page - 1) * CONFIG.blog.postsPerPage;
            const endIndex = startIndex + CONFIG.blog.postsPerPage;
            const postsToShow = relatedPosts.slice(startIndex, endIndex);
            
            // Render related posts
            this.renderRelatedPosts(postsToShow);
            
            // Render pagination if element exists
            if (pagination) {
                this.renderPagination(totalPages, page, currentPostId);
            }
        },

        renderRelatedPosts: function(posts) {
            const relatedPostsGrid = document.getElementById('relatedPostsGrid');
            if (!relatedPostsGrid) return;

            if (posts.length === 0) {
                relatedPostsGrid.innerHTML = '<p class="no-posts">No related posts found.</p>';
                return;
            }

            relatedPostsGrid.innerHTML = posts.map(post => `
                <div class="related-post-card" data-id="${post.id}">
                    <div class="related-post-image">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="related-post-content">
                        <span class="related-post-category">${post.category}</span>
                        <h3>${post.title}</h3>
                        <div class="related-post-meta">
                            <span>${post.date}</span>
                            <span>${post.readTime}</span>
                        </div>
                        <p class="related-post-excerpt">${post.excerpt}</p>
                        <button class="btn-read-more">    
                            Read More
                            <i class="fas fa-arrow-right"></i> 
                        </button>
                    </div>
                </div>
            `).join('');
            
            // Add event listeners to related posts
            document.querySelectorAll('.related-post-card').forEach(postEl => {
                postEl.addEventListener('click', (e) => {
                    // Don't trigger if clicking the read more button
                    if (!e.target.classList.contains('btn-read-more')) {
                        const postId = parseInt(postEl.getAttribute('data-id'));
                        this.loadBlogPost(postId);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                });
            });

            // Add event listeners to read more buttons
            document.querySelectorAll('.btn-read-more').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const postCard = e.target.closest('.related-post-card');
                    const postId = parseInt(postCard.getAttribute('data-id'));
                    this.loadBlogPost(postId);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            });

            // Add scroll animation to new related posts
            setTimeout(() => {
                document.querySelectorAll('.related-post-card').forEach(card => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    card.style.transition = `opacity ${CONFIG.animation.duration}ms ease, transform ${CONFIG.animation.duration}ms ease`;
                    scrollAnimation.observer.observe(card);
                });
            }, 100);
        },

        renderPagination: function(totalPages, currentPage, currentPostId) {
            const pagination = document.getElementById('pagination');
            if (!pagination) return;

            // Don't show pagination if there's only one page
            if (totalPages <= 1) {
                pagination.style.display = 'none';
                return;
            }
            
            pagination.style.display = 'flex';

            let paginationHTML = '';
            
            // Previous button
            if (currentPage > 1) {
                paginationHTML += `<div class="page-number prev" data-page="${currentPage - 1}">
                    <i class="fas fa-chevron-left"></i> Prev
                </div>`;
            }
            
            // Page numbers - show limited pages for better UX
            const maxVisiblePages = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            // Adjust start page if we're near the end
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }
            
            // First page and ellipsis
            if (startPage > 1) {
                paginationHTML += `<div class="page-number" data-page="1">1</div>`;
                if (startPage > 2) {
                    paginationHTML += `<div class="page-ellipsis">...</div>`;
                }
            }
            
            // Page numbers
            for (let i = startPage; i <= endPage; i++) {
                if (i === currentPage) {
                    paginationHTML += `<div class="page-number active" data-page="${i}">${i}</div>`;
                } else {
                    paginationHTML += `<div class="page-number" data-page="${i}">${i}</div>`;
                }
            }
            
            // Last page and ellipsis
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationHTML += `<div class="page-ellipsis">...</div>`;
                }
                paginationHTML += `<div class="page-number" data-page="${totalPages}">${totalPages}</div>`;
            }
            
            // Next button
            if (currentPage < totalPages) {
                paginationHTML += `<div class="page-number next" data-page="${currentPage + 1}">
                    Next <i class="fas fa-chevron-right"></i>
                </div>`;
            }
            
            pagination.innerHTML = paginationHTML;
            
            // Add event listeners to pagination numbers
            document.querySelectorAll('.page-number').forEach(pageEl => {
                pageEl.addEventListener('click', () => {
                    const page = parseInt(pageEl.getAttribute('data-page'));
                    this.loadRelatedPosts(currentPostId, page);
                    // Scroll to related posts section
                    const relatedSection = document.querySelector('.related-posts-section');
                    if (relatedSection) {
                        relatedSection.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
    };

    // ========== COUNTER ANIMATION SYSTEM ==========
    const counterAnimation = {
        elements: [],
        observer: null,

        init: function() {
            this.elements = document.querySelectorAll('.percentage, .result-number, .stat-number');
            this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
                threshold: 0.1
            });
            
            this.elements.forEach(el => this.observer.observe(el));
        },

        handleIntersection: function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    this.animateCounter(entry.target);
                }
            });
        },

        animateCounter: function(element) {
            try {
                const targetValue = element.getAttribute('data-target');
                
                if (!targetValue) {
                    console.warn('Missing data-target attribute for element:', element);
                    return;
                }

                let target, symbol = '';
                
                // Handle symbols in target value
                if (targetValue.includes('%')) {
                    target = parseInt(targetValue.replace('%', ''));
                    symbol = '%';
                } else if (targetValue.includes('+')) {
                    target = parseInt(targetValue.replace('+', ''));
                    symbol = '+';
                } else {
                    target = parseInt(targetValue);
                }

                if (isNaN(target)) {
                    console.warn('Invalid data-target value:', targetValue);
                    return;
                }

                const duration = 2000;
                const step = Math.max(target / (duration / 16), 1);
                let current = 0;

                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                        element.textContent = symbol ? target + symbol : target.toString();
                    } else {
                        element.textContent = symbol ? Math.floor(current) + symbol : Math.floor(current).toString();
                    }
                }, 16);

                element.classList.add('animated');
            } catch (error) {
                console.error('Error animating counter:', error);
            }
        }
    };

    // ========== SCROLL ANIMATION SYSTEM ==========
    const scrollAnimation = {
        observer: null,
        animatedSelectors: [
            '.expertise-card', '.case-study', '.testimonial', '.reason', 
            '.blog-card', '.service-card', '.process-step', '.result-card', 
            '.benefit', '.srilanka-feature', '.advantage-card', '.approach-item',
            '.feature', '.benefit-card', '.capability', '.offering-item',
            '.timeline-item', '.story-item', '.implementation-step',
            '.seo-solution-card', '.solution-feature', '.strategy-item',
            '.related-post-card'
        ],

        init: function() {
            this.observer = new IntersectionObserver(this.handleIntersection.bind(this), CONFIG.animation);
            this.setupElements();
            
            // Special handling for SEO solutions section with staggered animation
            this.setupSEOSolutionsAnimation();
        },

        setupElements: function() {
            this.animatedSelectors.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(30px)';
                    el.style.transition = `opacity ${CONFIG.animation.duration}ms ease, transform ${CONFIG.animation.duration}ms ease`;
                    this.observer.observe(el);
                });
            });
        },

        handleIntersection: function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },

        // Special setup for SEO solutions section
        setupSEOSolutionsAnimation: function() {
            const seoSolutionsSection = document.querySelector('.seo-solutions');
            if (!seoSolutionsSection) return;

            const solutionCards = seoSolutionsSection.querySelectorAll('.seo-solution-card');
            const solutionFeatures = seoSolutionsSection.querySelectorAll('.solution-feature');
            const strategyItems = seoSolutionsSection.querySelectorAll('.strategy-item');

            // Apply staggered animation to SEO solution cards
            this.staggerAnimation(solutionCards, 150);
            
            // Apply staggered animation to solution features
            this.staggerAnimation(solutionFeatures, 100);
            
            // Apply staggered animation to strategy items
            this.staggerAnimation(strategyItems, 120);
        },

        // Staggered animation for groups
        staggerAnimation: function(elements, delay = 100) {
            elements.forEach((el, index) => {
                el.style.transitionDelay = `${index * delay}ms`;
            });
        }
    };

    // ========== MOBILE MENU SYSTEM ==========
    const mobileMenu = {
        hamburger: null,
        navLinks: null,
        body: null,
        isOpen: false,

        init: function() {
            this.hamburger = document.querySelector('.hamburger');
            this.navLinks = document.querySelector('.nav-links');
            this.body = document.body;

            if (!this.hamburger || !this.navLinks) return;

            this.setupEventListeners();
        },

        setupEventListeners: function() {
            // Hamburger click
            this.hamburger.addEventListener('click', this.toggle.bind(this));

            // Close when clicking on links
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', this.close.bind(this));
            });

            // Close when clicking outside
            document.addEventListener('click', (event) => {
                const isClickInsideNav = this.navLinks.contains(event.target);
                const isClickOnHamburger = this.hamburger.contains(event.target);
                
                if (!isClickInsideNav && !isClickOnHamburger && this.isOpen) {
                    this.close();
                }
            });

            // Close on escape key
            document.addEventListener('keydown', (event) => {
                if (event.key === 'Escape' && this.isOpen) {
                    this.close();
                }
            });

            // Close on window resize
            window.addEventListener('resize', utils.debounce(() => {
                if (window.innerWidth > CONFIG.breakpoints.mobile && this.isOpen) {
                    this.close();
                }
            }, 250));
        },

        toggle: function() {
            if (this.isOpen) {
                this.close();
            } else {
                this.open();
            }
        },

        open: function() {
            this.hamburger.classList.add('active');
            this.navLinks.classList.add('active');
            this.body.classList.add('menu-open');
            this.isOpen = true;
        },

        close: function() {
            this.hamburger.classList.remove('active');
            this.navLinks.classList.remove('active');
            this.body.classList.remove('menu-open');
            this.isOpen = false;
        }
    };

    // ========== FORM HANDLING SYSTEM ==========
    const formHandler = {
        forms: {},

        init: function() {
            this.setupForms();
            this.setupFormValidation();
        },

        setupForms: function() {
            // SEO Audit Form
            this.forms.seoAudit = document.getElementById('seo-audit-form');
            if (this.forms.seoAudit) {
                this.forms.seoAudit.addEventListener('submit', (e) => this.handleFormSubmit(e, 'seo-audit'));
            }

            // AI Consultation Form
            this.forms.aiConsultation = document.getElementById('ai-seo-consultation-form');
            if (this.forms.aiConsultation) {
                this.forms.aiConsultation.addEventListener('submit', (e) => this.handleFormSubmit(e, 'ai-consultation'));
            }

            // WordPress Consultation Form
            this.forms.wordpressConsultation = document.getElementById('wordpress-consultation-form');
            if (this.forms.wordpressConsultation) {
                this.forms.wordpressConsultation.addEventListener('submit', (e) => this.handleFormSubmit(e, 'wordpress-consultation'));
            }
        },

        setupFormValidation: function() {
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                const inputs = form.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearFieldError(input));
                });
            });
        },

        validateField: function(field) {
            if (field.value.trim() === '' && field.hasAttribute('required')) {
                field.classList.add('error');
                return false;
            }

            if (field.type === 'email' && field.value.trim() !== '' && !utils.validateEmail(field.value)) {
                field.classList.add('error');
                return false;
            }

            if (field.type === 'url' && field.value.trim() !== '' && !utils.validateURL(field.value)) {
                field.classList.add('error');
                return false;
            }

            field.classList.remove('error');
            return true;
        },

        clearFieldError: function(field) {
            if (field.value.trim() !== '') {
                field.classList.remove('error');
            }
        },

        handleFormSubmit: function(e, formType) {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            
            // Validate all fields
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea, select');
            inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                notification.show('Please fill in all required fields correctly.', 'error');
                return;
            }

            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                const successMessages = {
                    'seo-audit': 'Thank you! Your SEO audit request has been received.',
                    'ai-consultation': 'Thank you! Your AI SEO audit request has been received.',
                    'wordpress-consultation': 'Thank you! Your WordPress consultation request has been received.'
                };

                notification.show(successMessages[formType] + ' We\'ll contact you within 24 hours.', 'success');
                form.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Track conversion
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'conversion', {
                        'send_to': `AW-YOUR_CONVERSION_ID/${formType}_request`,
                        'value': 1.0,
                        'currency': 'USD'
                    });
                }
            }, 2000);
        }
    };

    // ========== INTERACTIVE COMPONENTS ==========
    const interactiveComponents = {
        init: function() {
            this.setupFAQ();
            this.setupHoverEffects();
            this.setupSmoothScrolling();
            this.setupCaseStudyFilters();
            this.setupActiveNavigation();
            this.setupSEOSolutionsInteractions();
            this.setupHeaderScroll();
        },

        setupFAQ: function() {
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if(otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
        },

        setupHoverEffects: function() {
            // Buttons
            const buttons = document.querySelectorAll('.btn');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => button.style.transform = 'translateY(-3px)');
                button.addEventListener('mouseleave', () => button.style.transform = 'translateY(0)');
            });

            // Cards 
            const cards = document.querySelectorAll('.service-card, .advantage-card, .case-study, .benefit-card, .seo-solution-card, .related-post-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px) scale(1.02)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });

            // Solution features
            const solutionFeatures = document.querySelectorAll('.solution-feature');
            solutionFeatures.forEach(feature => {
                feature.addEventListener('mouseenter', () => {
                    feature.style.transform = 'translateY(-5px)';
                });
                feature.addEventListener('mouseleave', () => {
                    feature.style.transform = 'translateY(0)';
                });
            });
        },

        setupSmoothScrolling: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId !== '#') {
                        utils.smoothScroll(targetId);
                    }
                });
            });
        },

        setupCaseStudyFilters: function() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            const caseStudyItems = document.querySelectorAll('.case-study');

            if (filterButtons.length === 0) return;

            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Update active button
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Filter items
                    const filterValue = this.getAttribute('data-filter');
                    caseStudyItems.forEach(item => {
                        if (filterValue === 'all') {
                            item.style.display = 'block';
                        } else {
                            const categories = item.getAttribute('data-category').split(' ');
                            item.style.display = categories.includes(filterValue) ? 'block' : 'none';
                        }
                    });
                });
            });
        },

        setupActiveNavigation: function() {
            const currentPage = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-links a');
            
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        },

        // SEO Solutions specific interactions
        setupSEOSolutionsInteractions: function() {
            const solutionCards = document.querySelectorAll('.seo-solution-card');
            
            solutionCards.forEach(card => {
                // Add click effect for solution cards
                card.addEventListener('click', function() {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });

                // Add icon animation on hover
                const icon = card.querySelector('.solution-icon');
                if (icon) {
                    card.addEventListener('mouseenter', () => {
                        icon.style.transform = 'rotate(10deg) scale(1.1)';
                    });
                    card.addEventListener('mouseleave', () => {
                        icon.style.transform = 'rotate(0) scale(1)';
                    });
                }
            });

            // Strategy items interaction
            const strategyItems = document.querySelectorAll('.strategy-item');
            strategyItems.forEach(item => {
                item.addEventListener('mouseenter', function() {
                    const number = this.querySelector('.strategy-number');
                    if (number) {
                        number.style.transform = 'scale(1.2)';
                    }
                });
                
                item.addEventListener('mouseleave', function() {
                    const number = this.querySelector('.strategy-number');
                    if (number) {
                        number.style.transform = 'scale(1)';
                    }
                });
            });
        },

        setupHeaderScroll: function() {
            const header = document.querySelector('header');
            if (!header) return;

            window.addEventListener('scroll', utils.debounce(() => {
                header.classList.toggle('scrolled', window.scrollY > 50);
            }, 10));
        }
    };

    // ========== PAGE SPECIFIC FUNCTIONALITY ==========
    const pageSpecific = {
        init: function() {
            this.setupHeroAnimations();
            this.setupPageLoad();
            this.setupSEOSolutionsSection();
        },

        setupHeroAnimations: function() {
            const heroContent = document.querySelector('.hero-content');
            const seoHeroContent = document.querySelector('.seo-hero-text');
            
            [heroContent, seoHeroContent].forEach(element => {
                if (element) {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(30px)';
                    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 300);
                }
            });
        },

        setupPageLoad: function() {
            window.addEventListener('load', () => {
                document.body.classList.add('loaded');
            });
        },

        // SEO Solutions section specific setup
        setupSEOSolutionsSection: function() {
            const seoSolutionsSection = document.querySelector('.seo-solutions');
            if (!seoSolutionsSection) return;

            // Add intersection observer for the entire section
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        
                        // Trigger counter animations if any in this section
                        const counters = entry.target.querySelectorAll('.percentage, .stat-number');
                        counters.forEach(counter => {
                            if (!counter.classList.contains('animated')) {
                                counterAnimation.animateCounter(counter);
                            }
                        });
                    }
                });
            }, { threshold: 0.2 });

            sectionObserver.observe(seoSolutionsSection);
        }
    };

    // ========== INITIALIZE ALL SYSTEMS ==========
    function initializeAll() {
        mobileMenu.init();
        scrollAnimation.init();
        counterAnimation.init();
        formHandler.init();
        interactiveComponents.init();
        pageSpecific.init();
        blogSystem.init(); // Initialize blog system

        // Apply staggered animations to specific element groups
        const staggeredElements = [
            '.advantage-card',
            '.service-card', 
            '.process-step',
            '.benefit-card',
            '.offering-item',
            '.seo-solution-card',
            '.solution-feature',
            '.strategy-item',
            '.related-post-card'
        ];

        staggeredElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            if (elements.length > 0) {
                scrollAnimation.staggerAnimation(elements, 100);
            }
        });
    }

    // Start everything
    initializeAll();
});

// Add global styles including SEO solutions and blog specific styles
const globalStyles = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
    
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification.success {
        background-color: #10b981;
    }
    
    .notification.error {
        background-color: #ef4444;
    }
    
    form input.error,
    form select.error,
    form textarea.error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
    }
    
    .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    

    
    
    
    /* Mobile case study expand/collapse */
    @media (max-width: 768px) {
        .challenge-solution {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .seo-case-study.expanded .challenge-solution {
            max-height: 1000px;
        }
        
        .case-study-results {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .seo-case-study.expanded .case-study-results {
            opacity: 1;
        }
                
        .blog-article-content h1 {
            font-size: 2rem;
        }
        
        .blog-article-content h2 {
            font-size: 1.5rem;
        }
    }
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.textContent = globalStyles;
document.head.appendChild(styleElement);

