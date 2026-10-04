
/* ==========================================
   INTERACTIVE SKILLS & EXPERTISE
   Abhishek Thakur Portfolio
========================================== */
(function () {
  "use strict";

  function initInteractiveSkills() {
    const grid = document.getElementById("skillsGrid");
    const panel = document.getElementById("skillDetails");

    if (!grid || !panel || grid.dataset.interactiveReady === "true") {
      return;
    }

    grid.dataset.interactiveReady = "true";

    const skills = {
      "seo": {
        icon: "⌕",
        color: "#8b5cf6",
        title: "Search Engine Optimization",
        intro: "Improve organic visibility through search-focused content, technical improvements and authority building.",
        groups: [
          ["On-Page SEO", "Title tags & meta descriptions", "Heading structure (H1–H6)", "Internal linking", "Image alt text", "Content optimization"],
          ["Off-Page SEO", "Quality backlink acquisition", "Guest posting & outreach", "Competitor backlink analysis", "Brand mentions", "Link quality audits"],
          ["Local SEO", "Google Business Profile", "Local keyword targeting", "NAP consistency", "Local citations", "Reviews & reputation"],
          ["SEO Tools", "Google Search Console", "Google Analytics", "Semrush", "Bing Webmaster Tools", "SEO performance reporting"]
        ]
      },

      "google-ads": {
        icon: "◉",
        color: "#4285f4",
        title: "Google Ads & PPC",
        intro: "Plan, launch and optimize paid campaigns around relevant traffic, leads, sales and measurable conversions.",
        groups: [
          ["Campaign Types", "Search campaigns", "Display campaigns", "Video & YouTube campaigns", "Shopping campaigns", "Performance Max"],
          ["Keyword & Audience Strategy", "Keyword research", "Search intent analysis", "Negative keywords", "Audience segments", "Location & device targeting"],
          ["Optimization", "CPC, CPA & ROAS monitoring", "Smart Bidding strategies", "Ad copy testing", "Budget allocation", "Search terms analysis"],
          ["Tracking & Reporting", "Conversion tracking", "Google Tag Manager", "GA4 integration", "Landing-page analysis", "Campaign performance reports"]
        ]
      },

      "meta-ads": {
        icon: "∞",
        color: "#1685ff",
        title: "Meta Ads — Facebook & Instagram",
        intro: "Build and optimize paid social campaigns for lead generation, WhatsApp conversations, website conversions and sales.",
        groups: [
          ["Campaign Setup", "Campaign objectives & conversion locations", "Lead generation campaigns", "Sales & website conversion campaigns", "WhatsApp messaging campaigns", "Traffic & awareness campaigns"],
          ["Audience Targeting", "Custom Audiences", "Lookalike Audiences", "Interest & demographic targeting", "Customer list audiences", "Audience exclusions"],
          ["Remarketing & Retargeting", "Website visitor retargeting", "Facebook & Instagram engagers", "Video-viewer audiences", "Lead-form openers & submitters", "Customer and purchaser retargeting"],
          ["Creative & Testing", "Image, video & Reels ads", "Ad copy and creative angles", "Creative testing", "A/B testing", "Placement-specific creative"],
          ["Tracking & Optimization", "Meta Pixel setup", "Conversions API (CAPI)", "Event and conversion tracking", "CPL, CPA, CTR & CPC analysis", "Budget optimization & frequency monitoring"]
        ]
      },

      "performance": {
        icon: "↗",
        color: "#06b6d4",
        title: "Performance Marketing",
        intro: "Connect paid media, conversion tracking and funnel optimization to measurable business outcomes.",
        groups: [
          ["Strategy", "Campaign planning", "Customer acquisition strategy", "Funnel mapping", "Channel selection", "Budget planning"],
          ["Acquisition", "Paid search", "Paid social", "Lead generation", "Landing-page optimization", "Remarketing"],
          ["Measurement", "CAC & CPL tracking", "CPA & ROAS analysis", "Conversion rate", "Attribution basics", "Marketing dashboards"],
          ["Optimization", "A/B testing", "Creative experiments", "Audience refinement", "Budget reallocation", "Lead quality analysis"]
        ]
      },

      "technical-seo": {
        icon: "⌘",
        color: "#a78bfa",
        title: "Technical SEO",
        intro: "Improve crawling, indexing, website accessibility and technical foundations for search engines.",
        groups: [
          ["Crawl & Index", "XML sitemaps", "Robots.txt checks", "Index coverage reviews", "Canonical tags", "Redirect management"],
          ["Site Health", "404 & broken-link audits", "Redirect chains", "Duplicate content checks", "HTTPS checks", "Crawl error investigation"],
          ["Performance", "Core Web Vitals", "Mobile usability", "Page speed improvements", "Image optimization", "JavaScript SEO basics"],
          ["Structured Data", "Schema markup basics", "Rich Results testing", "Breadcrumb markup", "Organization & local business schema", "Search Console monitoring"]
        ]
      },

      "keywords": {
        icon: "⌕",
        color: "#f59e0b",
        title: "Keyword Research",
        intro: "Identify relevant search terms using search intent, competition, business relevance and content opportunities.",
        groups: [
          ["Keyword Discovery", "Seed keyword research", "Long-tail keywords", "Question-based keywords", "Local keyword research", "Competitor keyword gaps"],
          ["Search Intent", "Informational intent", "Commercial investigation", "Transactional intent", "Navigational intent", "SERP analysis"],
          ["Keyword Mapping", "Primary & secondary keywords", "Page-to-keyword mapping", "Topic clusters", "Content gap analysis", "Cannibalization checks"],
          ["Tools & Reporting", "Google Keyword Planner", "Google Search Console", "Semrush", "Search volume & competition review", "Keyword tracking"]
        ]
      },

      "analytics": {
        icon: "▥",
        color: "#34d399",
        title: "Google Analytics & Measurement",
        intro: "Measure website behavior and campaign outcomes to understand what drives meaningful conversions.",
        groups: [
          ["GA4", "Traffic acquisition reports", "User engagement", "Landing-page performance", "Event tracking", "Key events & conversions"],
          ["Tracking Setup", "Google Tag Manager", "UTM parameters", "Form submission tracking", "Click tracking", "Tag debugging"],
          ["Performance Analysis", "Source & medium analysis", "Lead funnel analysis", "Conversion rate", "Paid campaign reporting", "Traffic quality review"],
          ["Reporting", "Custom reports", "Looker Studio basics", "KPI dashboards", "Trend analysis", "Actionable insights"]
        ]
      },

      "wordpress": {
        icon: "W",
        color: "#38bdf8",
        title: "WordPress & Landing Pages",
        intro: "Create and maintain business websites and landing pages with usability, performance and SEO in mind.",
        groups: [
          ["Website Building", "WordPress setup", "Theme customization", "Elementor page building", "Responsive layouts", "Header & footer setup"],
          ["Landing Pages", "Lead capture forms", "CTA placement", "Conversion-focused layouts", "WhatsApp integration", "Thank-you pages"],
          ["SEO & Performance", "SEO-friendly URLs", "Metadata editing", "Image compression", "Caching basics", "Mobile optimization"],
          ["Maintenance", "Plugin management", "Backup basics", "Broken-link checks", "Form testing", "Website content updates"]
        ]
      },

      "content": {
        icon: "✎",
        color: "#fb7185",
        title: "Content Marketing",
        intro: "Develop useful, search-focused content that supports audience needs, organic discovery and lead generation.",
        groups: [
          ["Content Strategy", "Audience research", "Content calendars", "Topic clusters", "Competitor content gaps", "Content refresh planning"],
          ["SEO Content", "Blog structure & headings", "Search intent alignment", "On-page optimization", "Internal linking", "Helpful content improvements"],
          ["Content Formats", "Blog posts & articles", "Website landing-page copy", "Social media captions", "Ad copy", "Email content"],
          ["Content Measurement", "Organic traffic monitoring", "Engagement analysis", "Content conversions", "Search Console performance", "Content updates"]
        ]
      },

      "social": {
        icon: "◈",
        color: "#10d9b0",
        title: "Social Media Marketing",
        intro: "Plan consistent social content, improve brand presence and support engagement across relevant platforms.",
        groups: [
          ["Social Strategy", "Audience research", "Platform selection", "Content calendars", "Brand positioning", "Competitor analysis"],
          ["Platforms", "Instagram", "Facebook", "LinkedIn", "YouTube", "Pinterest & other relevant channels"],
          ["Content & Community", "Posts, Reels & short videos", "Captions & hashtags", "Community engagement", "Comment management", "Content repurposing"],
          ["Analytics", "Reach & impressions", "Engagement rate", "Follower growth", "Content performance", "Monthly reporting"]
        ]
      },

      "canva": {
        icon: "✳",
        color: "#a78bfa",
        title: "Canva & Creative Design",
        intro: "Create consistent visual assets for campaigns, social media and marketing communications.",
        groups: [
          ["Ad Creatives", "Static ad designs", "Carousel creatives", "Promotional banners", "Offer creatives", "Creative variations"],
          ["Social Content", "Instagram posts", "Stories & Reels covers", "LinkedIn graphics", "YouTube thumbnails", "Content templates"],
          ["Design Fundamentals", "Typography hierarchy", "Color consistency", "Visual hierarchy", "Brand consistency", "Mobile-first readability"],
          ["Creative Testing", "Multiple creative concepts", "Hook variations", "CTA variations", "Creative refreshes", "Performance-based iterations"]
        ]
      },

      "ai": {
        icon: "✧",
        color: "#c084fc",
        title: "AI Marketing Tools",
        intro: "Use AI-assisted workflows to speed up research, content planning, analysis and repetitive marketing tasks.",
        groups: [
          ["Research & Planning", "Topic brainstorming", "Keyword clustering assistance", "Competitor research assistance", "Content briefs", "Campaign ideation"],
          ["Content Workflows", "Draft outlines", "Ad copy variations", "Meta descriptions", "Content repurposing", "Editing & quality checks"],
          ["SEO & Analysis", "Content gap assistance", "Technical audit summaries", "Data interpretation", "Reporting assistance", "Content optimization ideas"],
          ["Automation", "Workflow planning", "No-code automation concepts", "Lead workflow design", "Spreadsheet workflows", "Human review & quality control"]
        ]
      },

      "link-building": {
        icon: "⌁",
        color: "#06b6d4",
        title: "Link Building & Outreach",
        intro: "Research relevant websites and pursue editorially appropriate links that support discovery and authority.",
        groups: [
          ["Opportunity Research", "Competitor backlink analysis", "Relevant website discovery", "Resource page research", "Broken-link opportunities", "Unlinked brand mentions"],
          ["Outreach", "Personalized outreach emails", "Publisher research", "Guest contribution pitches", "Follow-up management", "Relationship building"],
          ["Link Quality", "Topical relevance", "Editorial quality checks", "Anchor text diversity", "Link placement review", "Spam-risk assessment"],
          ["Tracking", "Outreach spreadsheets", "Prospect status tracking", "New and lost link monitoring", "Referral traffic checks", "Backlink reporting"]
        ]
      }
    };

    function renderSkill(key) {
      const skill = skills[key];
      if (!skill) return;

      grid.classList.add("skills-grid-hidden");
      grid.setAttribute("aria-hidden", "true");

      panel.replaceChildren();
      panel.style.setProperty("--skill-accent", skill.color);

      const header = document.createElement("div");
      header.className = "skill-detail-header";

      const identity = document.createElement("div");
      identity.className = "skill-detail-identity";

      const icon = document.createElement("div");
      icon.className = "skill-detail-icon";
      icon.textContent = skill.icon;
      icon.setAttribute("aria-hidden", "true");

      const heading = document.createElement("div");
      heading.innerHTML =
        '<span class="skill-detail-kicker">SKILLS & EXPERTISE</span>' +
        '<h3 class="skill-detail-title"></h3>';

      heading.querySelector("h3").textContent = skill.title;
      identity.append(icon, heading);

      const back = document.createElement("button");
      back.type = "button";
      back.className = "skill-back-button";
      back.innerHTML = "← <span>All Skills</span>";
      back.addEventListener("click", showAllSkills);

      header.append(identity, back);

      const intro = document.createElement("p");
      intro.className = "skill-detail-intro";
      intro.textContent = skill.intro;

      const stats = document.createElement("div");
      stats.className = "skill-detail-stats";
      stats.innerHTML =
        '<div><strong>' + skill.groups.length +
        '</strong><span>Focus Areas</span></div>' +
        '<div><strong>' + skill.groups.reduce(
          (sum, group) => sum + group.length - 1, 0
        ) + '</strong><span>Core Skills</span></div>' +
        '<div><strong>360°</strong><span>Skill Overview</span></div>';

      const groups = document.createElement("div");
      groups.className = "skill-detail-grid";

      skill.groups.forEach(function (group, index) {
        const card = document.createElement("article");
        card.className = "skill-detail-card";
        card.style.setProperty("--card-index", index);

        const title = document.createElement("h4");
        title.textContent = group[0];

        const list = document.createElement("ul");

        group.slice(1).forEach(function (item) {
          const li = document.createElement("li");
          const dot = document.createElement("span");
          dot.className = "skill-list-dot";
          dot.setAttribute("aria-hidden", "true");

          const text = document.createElement("span");
          text.textContent = item;

          li.append(dot, text);
          list.appendChild(li);
        });

        card.append(title, list);
        groups.appendChild(card);
      });

      panel.append(header, intro, stats, groups);
      panel.hidden = false;
      panel.classList.remove("skill-panel-visible");

      requestAnimationFrame(function () {
        panel.classList.add("skill-panel-visible");
        panel.scrollIntoView({ behavior: "smooth", block: "start" });
        back.focus({ preventScroll: true });
      });
    }

    function showAllSkills() {
      panel.classList.remove("skill-panel-visible");
      grid.classList.remove("skills-grid-hidden");
      grid.removeAttribute("aria-hidden");

      window.setTimeout(function () {
        panel.hidden = true;
        panel.replaceChildren();
      }, 180);

      grid.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    grid.addEventListener("click", function (event) {
      const card = event.target.closest(".skill-card[data-skill]");
      if (!card || !grid.contains(card)) return;

      event.preventDefault();
      renderSkill(card.dataset.skill);
    });

    grid.querySelectorAll(".skill-card[data-skill]").forEach(function (card) {
      card.setAttribute("aria-controls", "skillDetails");
      card.setAttribute("aria-expanded", "false");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initInteractiveSkills);
  } else {
    initInteractiveSkills();
  }
})();

(function () {
  "use strict";

  function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    counters.forEach(function (counter) {

      const target = parseInt(counter.dataset.target, 10);
      const suffix = counter.dataset.suffix || "";

      if (isNaN(target)) return;

      let current = 0;

      // Always start from 0
      counter.textContent = "0" + suffix;

      // Small delay so 0 is actually visible
      setTimeout(function () {

        const speed = 120; // higher = slower

        const timer = setInterval(function () {

          current += 1;

          counter.textContent = current + suffix;

          if (current >= target) {
            clearInterval(timer);
            counter.textContent = target + suffix;
          }

        }, speed);

      }, 300);

    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCounters);
  } else {
    initCounters();
  }

})();