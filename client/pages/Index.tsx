import ArticleHeader from "@/components/ArticleHeader";
import ArticleHeadline from "@/components/ArticleHeadline";
import ArticleFooter from "@/components/ArticleFooter";
import ImageSection from "@/components/ImageSection";
import TextSection from "@/components/TextSection";
import CTAButton from "@/components/CTAButton";

export default function Index() {
  const handleCTA = () => {
    // Handle CTA action here
    console.log("CTA clicked");
  };

  return (
    <div className="article-container">
      <ArticleHeader />

      <ArticleHeadline
        title="After 20 Years Treating Women's Hormonal Changes, I Finally Understand Why Lower Belly Fat Won't Budge—And How Women Are Losing Inches In Just 8 Weeks Without Restrictive Diets"
        subheadline="A board-certified physician reveals the metabolic mechanism behind stubborn lower belly resistance and the tissue reactivation approach that's finally creating results."
        authorName="Sarah Mitchell, MD"
        authorImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop"
        date="December 29, 2024"
      />

      <main className="article-main">
        {/* Hero Image */}
        <ImageSection
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80"
          alt="Featured article image"
        />

        {/* Introduction Section */}
        <TextSection>
          <h2>Getting Started</h2>
          <p>
            In today's fast-paced world, finding balance and purpose has become
            more important than ever. This comprehensive guide explores the
            fundamental principles that successful individuals use to transform
            their lives and achieve lasting satisfaction.
          </p>
          <p>
            Throughout history, philosophers, scientists, and thought leaders
            have investigated what truly makes life meaningful. The insights
            gathered over centuries point to a few core principles that remain
            remarkably consistent across cultures and time periods.
          </p>
        </TextSection>

        {/* Supporting Image */}
        <ImageSection
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
          alt="Supporting visual content"
        />

        {/* Main Content Section 1 */}
        <TextSection>
          <h3>Understanding Purpose</h3>
          <p>
            Purpose is not something that happens to you—it's something you
            create. By taking time to reflect on your values and aspirations,
            you can begin to shape a life that aligns with who you truly are.
          </p>
          <p>
            Research shows that individuals with a strong sense of purpose
            experience higher levels of satisfaction, better health outcomes,
            and greater resilience during challenging times. This is not merely
            coincidence; it reflects the deep human need for meaningful
            engagement with the world around us.
          </p>
        </TextSection>

        {/* Supporting Image */}
        <ImageSection
          src="https://images.unsplash.com/photo-1460925895917-adf4e565db90?w=1200&q=80"
          alt="Success and achievement visual"
        />

        {/* Main Content Section 2 */}
        <TextSection>
          <h3>Building Sustainable Habits</h3>
          <p>
            The foundation of lasting change rests on small, consistent actions
            rather than dramatic overhauls. Habits are the building blocks of
            success, and understanding how to structure them effectively can
            accelerate your progress toward any goal.
          </p>
          <p>
            Rather than attempting massive change overnight, successful
            individuals focus on incremental improvements. These modest steps
            compound over time, creating substantial transformation. The key is
            starting small, celebrating progress, and maintaining patience
            throughout the journey.
          </p>
        </TextSection>

        {/* Supporting Image */}
        <ImageSection
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
          alt="Growth and development illustration"
        />

        {/* Main Content Section 3 */}
        <TextSection>
          <h3>The Power of Connection</h3>
          <p>
            Humans are fundamentally social beings. Our relationships, community
            involvement, and connections to others form the bedrock of both
            happiness and success. Quality connections provide support, purpose,
            and joy that cannot be found in isolation.
          </p>
          <p>
            Investing time in meaningful relationships and contributing to your
            community creates a sense of belonging and significance. These
            connections provide both practical support and emotional nourishment,
            making them essential to a well-lived life.
          </p>
        </TextSection>

        {/* Primary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Ready to Get Started?
            </h3>
            <div className="cta-group">
              <CTAButton onClick={handleCTA}>Learn More</CTAButton>
              <CTAButton onClick={handleCTA}>Explore Resources</CTAButton>
            </div>
          </div>
        </div>

        {/* Final Content Section */}
        <TextSection>
          <h3>Taking Action Today</h3>
          <p>
            The journey toward a more meaningful and fulfilling life begins with
            a single decision: the choice to prioritize what truly matters. This
            article has outlined key principles that guide successful
            transformation, but the real work happens in your daily choices and
            consistent effort.
          </p>
          <p>
            Start by identifying one area where you'd like to create change.
            Apply the principles discussed here, maintain your commitment, and
            watch as your life gradually transforms. Remember, progress is not
            linear, and setbacks are part of the journey. What matters is
            remaining committed to your vision and taking action every single day.
          </p>
        </TextSection>

        {/* Secondary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <p className="text-center text-gray-600 mb-6 sm:mb-8 text-lg">
              Don't miss out on actionable insights and practical strategies
            </p>
            <div className="cta-group">
              <CTAButton onClick={handleCTA}>Claim Your Guide</CTAButton>
            </div>
          </div>
        </div>
      </main>

      <ArticleFooter />
    </div>
  );
}
