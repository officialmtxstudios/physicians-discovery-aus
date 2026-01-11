import { useRef } from "react";
import ArticleHeader from "@/components/ArticleHeader";
import ArticleHeadline from "@/components/ArticleHeadline";
import ArticleFooter from "@/components/ArticleFooter";
import ImageSection from "@/components/ImageSection";
import TextSection from "@/components/TextSection";
import CTAButton from "@/components/CTAButton";
import StickyCTA from "@/components/StickyCTA";

export default function Index() {
  const drMitchellSectionRef = useRef<HTMLHeadingElement>(null);

  const handleCTA = () => {
    // Handle CTA action here
    console.log("CTA clicked");
  };

  return (
    <div className="article-container">
      <ArticleHeader />

      <ArticleHeadline
        title="After 20 Years Treating Women's Hormonal Changes, I Finally Understand Why Lower Belly Fat Won't Budge—And How Women Are Losing Inches In Just 8 Weeks"
        subheadline=""
        authorName="Sarah Mitchell, MD"
        authorImage="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fb8545eecc8404b2d9d48161b6e183bed?format=webp&width=96"
        date="December 29, 2025"
      />

      <main className="article-main">
        {/* Hero Image with responsive srcSet */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F6e455959008f43b088435199d9dc3d06"
          className="hero-image"
          alt="Featured content"
        />

        {/* Opening Section */}
        <TextSection>
          <p>
            For nearly two decades, I've sat across from women who were doing
            everything right.
          </p>
          <p>They ate clean.</p>
          <p>They exercised daily.</p>
          <p>
            They managed their stress, tracked their macros, tried every
            "evidence-based" protocol I recommended.
          </p>
          <p>
            And yet, <strong>their lower belly pouch stayed fat</strong>.
          </p>
          <p>
            Month after month, they'd come back to my office, frustrated,
            defeated, convinced they were somehow failing.
          </p>
          <p>I'd review their information.</p>
          <p>Check their hormone changes.</p>
          <p>Adjust their protocols.</p>
          <p>
            But deep down, <b>I was just as confused as they were</b>.
          </p>
          <p>I blamed perimenopause.</p>
          <p>They blamed themselves.</p>
          <p>We were both wrong.</p>
        </TextSection>

        {/* IMAGE 1 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fa7f552c4be5e4f02bc9ea8690b65a3df"
          alt="Dr. Sarah Mitchell - Board-Certified Physician"
        />

        {/* The Day Everything Changed */}
        <TextSection>
          <h2>The Day Everything Changed</h2>
          <p>
            It wasn't until I attended a continuing education conference on
            metabolic adaptation that <b>the pieces finally clicked</b>.
          </p>
          <p>
            A colleague of mine (a researcher specializing in post-menopausal
            tissue changes) presented findings that made my stomach drop.
          </p>
          <p>
            "The lower abdominal region doesn't just store fat differently after
            hormonal shifts," she explained.
          </p>
          <p>"It enters a state of metabolic hibernation."</p>
          <p>Not slower metabolism. Not stubborn fat.</p>
          <p>
            <b>Complete metabolic shutdown.</b>
          </p>
        </TextSection>

        {/* IMAGE 2 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F0d0c559792a34a65b8bbee4226244695"
          alt="Medical measurement and body composition assessment"
        />

        {/* Tissue Response Section */}
        <TextSection>
          <p>
            The tissue isn't ignoring your efforts. It literally can't hear the
            signals anymore.
          </p>
        </TextSection>

        {/* Why Your Lower Belly Stopped Responding */}
        <TextSection>
          <h2>
            Why Your Lower Belly Stopped Responding (And Why It's Not Your
            Fault)
          </h2>
          <p>
            Here's what's actually happening in that area—and why everything
            you've tried has failed:
          </p>
          <p>
            When estrogen levels decline (whether from perimenopause, menopause,
            or post-pregnancy hormonal shifts),{" "}
            <b>
              three critical changes occur simultaneously in lower abdominal
              tissue
            </b>
            :
          </p>
          <h3>1. Blood flow to the area decreases by up to 40%</h3>
          <p>
            Less blood flow means less oxygen, fewer nutrients, and
            significantly reduced metabolic activity.
          </p>
          <p>
            The fat cells in this region essentially go dormant, and they stop
            responding to the hormonal signals that normally trigger fat
            release.
          </p>
          <h3>2. Fascial tissue becomes rigid and "stuck"</h3>
          <p>
            The connective tissue (fascia) that surrounds your abdominal muscles
            loses elasticity.
          </p>
          <p>It stops gliding properly.</p>
          <p>
            This creates a double problem: first, it traps fluid between the
            layers, creating puffiness and swelling.
          </p>
          <p>
            Second, it physically prevents the underlying muscle from engaging
            properly, so even when you do core work, the muscle can't fully
            activate through the stuck fascia.
          </p>
          <h3>3. Cellular communication breaks down</h3>
          <p>
            The cells in this area stop responding to insulin, cortisol, and
            catecholamines (the hormones that regulate fat storage and release).
          </p>
          <p>It's like the cellular "phone lines" have been disconnected.</p>
        </TextSection>

        {/* IMAGE 4 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F06cf901212b0400c89f0093c78cd5f7c?format=webp&width=1200"
          alt="Healthy tissue versus dormant tissue comparison diagrams"
        />

        {/* Result Section */}
        <TextSection>
          <p>The result?</p>
          <p>You can eat in a calorie deficit.</p>
          <p>
            <b>You can do cardio.</b>
          </p>
          <p>
            <b>You can do core work.</b>
          </p>
          <p>
            But that specific area remains unresponsive—because{" "}
            <b>the tissue has entered metabolic dormancy</b>.
          </p>
          <p>Your body isn't ignoring your efforts.</p>
          <p>That area literally can't participate in the process anymore.</p>
        </TextSection>

        {/* Why Everything You've Tried Has Failed */}
        <TextSection>
          <h2>Why Everything You've Tried Has Failed</h2>
          <p>
            Once I understood this, I looked back at every protocol I'd
            recommended—and realized why none of them worked for this specific
            problem:
          </p>
          <h3>
            <span>Diet and exercise?</span>
          </h3>
          <p>They work beautifully for metabolically active tissue.</p>
          <p>But they can't "wake up" tissue that's already shut down.</p>
          <p>
            <b>
              You'll lose fat everywhere else while that lower belly remains
              unchanged
            </b>
            .
          </p>
          <h3>Core exercises and planks?</h3>
          <p>They strengthen the muscle underneath.</p>
          <p>
            But if the fascia above it is rigid and blood flow is restricted,
            you're essentially strengthening a muscle that's trapped under
            dormant tissue.
          </p>
          <h3>Topical creams and treatments?</h3>
          <p>
            They can't penetrate deep enough to reach the fascial layer or
            affect cellular metabolism.
          </p>
          <p>
            They work on the surface while the problem exists three layers deep.
          </p>
          <h3>Hormonal therapy?</h3>
          <p>
            Even when we optimize hormone levels, if the tissue has already
            entered dormancy, it won't spontaneously "wake up" just because
            hormones improve.
          </p>
          <p>The damage is already done.</p>
          <p>I realized we'd been treating the wrong problem entirely.</p>
          <p>We weren't dealing with fat that needed to be burned.</p>
          <p>
            <b>We were dealing with tissue that needed to be reactivated.</b>
          </p>
        </TextSection>

        {/* IMAGE 5 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fe10d571a4b6a4ea087407f1d43f60b77?format=webp&width=1200"
          alt="Woman performing stretching and core engagement exercises"
        />

        {/* The Missing Link */}
        <TextSection>
          <h2>The Missing Link: Metabolic Reactivation</h2>
          <p>After that conference, I became obsessed with one question:</p>
          <p>
            If tissue can enter metabolic shutdown, can it be brought back
            online?
          </p>
          <p>
            I spent months reviewing research on neuromuscular re-education,
            fascial mobilization, and tissue rehabilitation.
          </p>
          <p>
            Most of it was focused on post-surgical recovery or athletic injury
            treatment.
          </p>
          <p>
            But the mechanism was clear:{" "}
            <b>
              certain types of stimulation could restore cellular communication
              and "wake up" dormant tissue
            </b>
            .
          </p>
          <p>
            The problem? These treatments required expensive equipment and
            ongoing clinical sessions—physical therapy, specialized massage,
            professional-grade neuromuscular devices.
          </p>
          <p>
            The women I worked with couldn't afford $200 AUD/week in perpetuity.
          </p>
          <p>
            Then, six months ago, a woman came to my office and showed me{" "}
            <b>something that changed everything</b>.
          </p>
        </TextSection>

        {/* Dr. Mitchell Discovery */}
        <TextSection>
          <h2>"Dr. Mitchell, I Think I Finally Found Something That Works"</h2>
          <p>Jennifer was 52.</p>
          <p>Post-menopausal.</p>
          <p>
            She'd been extremely frustrated—doing everything right, seeing
            results everywhere except her lower belly pouch.
          </p>
          <p>She walked into my office looking different.</p>
          <p>Not dramatically thinner.</p>
          <p>But tighter.</p>
          <p>More contoured.</p>
          <p>
            The loose, bulging quality of her lower abdomen had visibly
            improved.
          </p>
          <p>"What did you do?" I asked immediately.</p>
          <p>She pulled out a small rose-gold device from her bag.</p>
          <p>"I was skeptical," she admitted.</p>
          <p>
            "But I read about the technology—how it works on multiple tissue
            layers at once, not just the surface.
          </p>
          <p>I figured, worst case, I'd return it."</p>
          <p>
            She'd been using it four times per week for eight weeks while
            maintaining her normal routine—same diet, same exercise, same
            lifestyle.
          </p>
          <p>"I started noticing changes around week three," she said.</p>
          <p>"The area felt tighter when I engaged my core.</p>
          <p>In the sixth week, I could see the difference.</p>
          <p>
            <b>After two months, my husband noticed</b> without me saying
            anything."
          </p>
        </TextSection>

        {/* IMAGE 6 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fd2ab4bdf59204b5ab79267fb55d76f3e"
          alt="Woman holding ReSculpt device in professional setting"
        />

        {/* Why This Works */}
        <TextSection>
          <p>I was intrigued.</p>
          <p>As a physician, I'm deeply skeptical of at-home devices.</p>
          <p>
            Most of them are overpriced gimmicks that prey on desperate women.
          </p>
          <p>
            <b>But Jennifer's results were undeniable.</b>
          </p>
          <p>
            And when she explained the technology that she read about
            (Multi-Layer Stimulation Reset™) the mechanism made perfect sense.
          </p>
        </TextSection>

        {/* Why This Works When Everything Else Failed */}
        <TextSection>
          <h2>Why This Works When Everything Else Failed</h2>
          <p>
            Here's what makes this different from every other device, cream, or
            protocol:
          </p>
          <p>
            <b>Most treatments work on ONE layer:</b>
          </p>
          <ul>
            <li>Creams work on skin (surface only)</li>
            <li>Standard massage works on fascia (middle layer only)</li>
            <li>Exercise works on muscle (deep layer only)</li>
          </ul>
          <p>
            But <b>metabolic shutdown affects ALL THREE layers</b>{" "}
            simultaneously.
          </p>
          <p>
            The ReSculpt (the device Jennifer brought into my office that day)
            uses Multi-Layer Stimulation Reset™ technology.
          </p>
          <p>
            This system delivers layered frequencies designed to reach each
            tissue type's specific resonance point.
          </p>
          <p>Think of it like this:</p>
          <p>Your skin tissue responds to one frequency.</p>
          <p>Your fascial tissue responds to another.</p>
          <p>Your muscle tissue responds to a third.</p>
          <p>
            <b>Most devices use a single frequency</b> (usually targeting
            surface-level skin or basic muscle contraction).
          </p>
          <p>That's why they feel nice but don't create lasting change.</p>
          <p>
            <b>ReSculpt delivers all three frequencies simultaneously.</b>
          </p>
          <p>
            It penetrates through the skin layer, activates the fascial layer,
            and engages the muscle layer—all in one treatment session.
          </p>
          <p>It's not vibrating fat away.</p>
          <p>It's not "melting" anything.</p>
          <p>
            <b>
              It's restoring metabolic communication to tissue that had gone
              silent.
            </b>
          </p>
          <p>
            It's essentially doing what a trained physical therapist does with
            manual fascial release and neuromuscular re-education.
          </p>
          <p>
            But you control the frequency, duration, and consistency at home.
          </p>
          <p>
            This is the same principle professional body sculpting clinics use.
          </p>
          <p>
            They charge over $1,800 AUD per area because they understood the
            signaling problem years before anyone else.
          </p>
          <p>
            But the technology has advanced enough that this level of
            stimulation can now be recreated safely at home.
          </p>
        </TextSection>

        {/* IMAGE 7 */}
        <ImageSection
          src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F8e652f8789114204b74b4f0816da7d0b?alt=media&token=6dc28b9c-7633-4557-9fc6-7115dc42d078&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
          alt="ReSculpt device showing multi-layer penetration into skin, fascia, and muscle"
        />

        {/* Why Clinics Charge So Much */}
        <TextSection>
          <h2>
            Why Clinics Charge over $4,000 AUD For This (And Why You Don't Have
            To)
          </h2>
          <p>Here's something most women don't realize:</p>
          <p>
            When you go to a professional body sculpting clinic and pay
            $2,700-$5,400 AUD per treatment area, you need to understand what
            you're actually paying for.
          </p>
          <p>
            You're not paying for them to "work harder" on your fat or "burn
            more calories."
          </p>
          <p>
            <b>You're paying for tissue re-signaling.</b>
          </p>
          <p>
            Clinics understood the signaling problem years before anyone else.
          </p>
          <p>
            They knew that stubborn areas weren't stubborn because of excess
            fat, they were stubborn because the tissue had stopped responding to
            metabolic signals.
          </p>
          <p>
            <b>So they developed multi-layer stimulation technology</b>.
          </p>
          <p>
            This technology could "wake up" dormant tissue by delivering precise
            frequencies to fat, fascia, and muscle simultaneously.
          </p>
        </TextSection>

        {/* IMAGE 8 */}
        <ImageSection
          src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F4445763fa7864ea9b8265bbcd724e0a4?alt=media&token=024edbd1-f2af-4d78-8959-d9cd864baceb&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
          alt="Professional body sculpting clinic with advanced equipment"
        />

        {/* Clinic Cost Explanation */}
        <TextSection>
          <p>That's why clinics get results when everything else fails.</p>
          <p>
            Not because they have magic machines—but because they finally
            addressed the actual problem.
          </p>
          <p>
            Ten years ago,{" "}
            <b>
              this level of multi-layer stimulation required clinic-grade
              equipment
            </b>
            .
          </p>
          <p>
            It was expensive, immobile, and required trained operators and
            multiple sessions at $500-$2,000 AUD each.
          </p>
          <p>
            But advances in tissue-penetration technology and frequency
            modulation have changed everything.
          </p>
          <p>
            <b>
              The same three-layer stimulation can now be delivered in a device
              you control at home.
            </b>
          </p>
          <p>The mechanism is identical.</p>
          <p>The delivery system has simply become accessible.</p>
          <p>ReSculpt doesn't "replicate" clinic technology.</p>
          <p>
            It uses the same core principle that makes clinics work, now refined
            for safe, consistent at-home use.
          </p>
        </TextSection>

        {/* If This Really Worked Section */}
        <TextSection>
          <h2>"If This Really Worked, Wouldn't Doctors Be Doing It?"</h2>
          <p>This is the question I hear most often—and it's a fair one.</p>
          <p>
            Here's the truth: Doctors have recommended similar technology—they
            just haven't been recommending at-home versions until recently.
          </p>
          <p>Why?</p>
          <p>
            Because until the last few years, at-home body devices fell into two
            categories:
          </p>
          <ul>
            <li>
              Surface-only stimulation (vibration belts, heated wraps) that
              couldn't penetrate deep enough to affect tissue metabolism
            </li>
            <li>
              Single-layer devices (basic EMS units) that could activate muscle
              but missed the fat and fascia layers entirely
            </li>
          </ul>
          <p>Neither could recreate true multi-layer stimulation.</p>
          <p>
            So doctors rightfully remained skeptical of at-home devices—because
            most of them didn't work.
          </p>
          <p>
            <b>What changed?</b>
          </p>
          <p>
            Advances in frequency modulation technology now allow multiple
            tissue-specific frequencies to be delivered simultaneously in a
            compact device.
          </p>
          <p>This wasn't possible even five years ago.</p>
          <p>
            <b>
              ReSculpt is the first at-home device I've seen that delivers
              genuine three-layer stimulation
            </b>
            , the same mechanism clinics use.
          </p>
          <p>Is it exactly identical to a $72,000 AUD clinic machine? No.</p>
          <p>
            But does it deliver the core mechanism (multi-layer tissue
            signaling) that makes clinic treatments effective?
          </p>
          <p>
            <b>Yes.</b>
          </p>
          <p>
            And because you control the frequency and consistency at home, many
            of the women I've recommended the device to actually see better
            results than they did with sporadic clinic visits.
          </p>
          <p>This isn't a "cheap alternative."</p>
          <p>It's the same science, evolved for accessibility.</p>
        </TextSection>

        {/* IMAGE - Before What I Started Seeing Repeatedly */}
        <div className="w-full bg-white py-4 sm:py-6 px-4 sm:px-6 md:flex md:justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/o/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbeaa732e2b924c2a95f0fa4581e0244f?alt=media&token=9e27985e-7950-4658-b834-a78d99c8dfef&apiKey=310e5dbc08df4ac4b4ffe8becccf5fde"
            alt="Patient testimonial results"
            style={{
              aspectRatio: "1",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              maxWidth: "48rem",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
          />
        </div>

        {/* What I Started Seeing Repeatedly */}
        <TextSection>
          <h2 ref={drMitchellSectionRef}>What I Started Seeing Repeatedly</h2>
          <p>
            After Jennifer's results, I couldn't stop thinking about the
            mechanism.
          </p>
          <p>
            If Multi-Layer Stimulation could reactivate dormant tissue, it
            should work consistently—not just for one woman.
          </p>
          <p>
            <b>So I started recommending it to other women</b> who fit the same
            profile: doing everything right, but that lower belly remained
            stubbornly unresponsive.
          </p>
          <p>
            I didn't tell them what to expect. I simply explained the technology
            and suggested they try it for 8-12 weeks while maintaining their
            current routine.
          </p>
          <p>
            <b>What happened next completely surprised me.</b>
          </p>
        </TextSection>

        {/* Case Example 1: Linda */}
        <TextSection>
          <h3>Case Example #1: Linda, 49 – Post-Hysterectomy "Pooch"</h3>
          <p>Linda had a full hysterectomy at 46.</p>
          <p>
            Within six months, she developed what she called "the pooch that
            appeared out of nowhere."
          </p>
          <p>
            She'd always been active—taught yoga, ate a predominantly
            plant-based diet.
          </p>
          <p>
            But after surgery, her lower abdomen became soft, protruding, and
            completely unresponsive to her normal routine.
          </p>
          <p>"I can hold a plank for two minutes," she told me, frustrated.</p>
          <p>"But my stomach still looks like this.</p>
          <p>It doesn't make sense."</p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 10 minutes per day, 4
            days per week, while continuing her regular yoga practice and diet.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 2:</strong> "The area feels tighter when I engage my
              core."
            </li>
            <li>
              <strong>Week 5:</strong> "My yoga pants fit better. The bulge
              isn't pushing against the waistband anymore."
            </li>
            <li>
              <strong>Week 8:</strong> "I measured. I'm down 2.5 inches around
              my lower abdomen. Same weight. Same routine. Just... tighter."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 9 */}
        <ImageSection
          src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbfdd3f11f9e745df9e6c9e2633e0e79b"
          alt="Woman in warrior pose demonstrating core strength and engagement"
        />

        {/* Linda Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> When I talked with Linda at week 8, the
            fascial tissue had noticeably improved in mobility.
          </p>
          <p>
            The "stuck" quality was gone. Her transverse abdominis engagement
            was visibly stronger.
          </p>
          <p>The tissue had quite literally woken back up.</p>
        </TextSection>

        {/* Case Example 2: Patricia */}
        <TextSection>
          <h3>Case Example #2: Patricia, 56 – "Menopause Belly"</h3>
          <p>Patricia came to me two years into menopause, devastated.</p>
          <p>"I gained 15 pounds, all in my stomach," she said.</p>
          <p>"I've lost 12 of those pounds.</p>
          <p>
            But my belly looks exactly the same as when I was 15 pounds
            heavier."
          </p>
          <p>
            She'd been walking daily, tracking calories, doing everything I
            recommended.
          </p>
          <p>Her labs were perfect.</p>
          <p>Her weight was healthy.</p>
          <p>
            But that lower belly pouch—the classic "menopause belly"—wouldn't
            budge.
          </p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 10 minutes per day, 5
            days per week, combined with her existing walking routine.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 3:</strong> "I don't see much yet, but it feels
              firmer. Like there's actually muscle under there now."
            </li>
            <li>
              <strong>Week 6:</strong> "My husband said, 'Your stomach looks
              flatter.' I thought he was being nice. Then I looked in the
              mirror. He was right."
            </li>
            <li>
              <strong>Week 10:</strong> "I'm wearing jeans I haven't been able
              to button in three years. I haven't lost any more weight. The
              shape just changed..."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 11 - Patricia's case example and results */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F31390673a70445caad4c62f2ba015c44"
          alt="Patricia's case example and results"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* Patricia Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> Patricia's case was particularly
            interesting because her weight remained stable throughout.
          </p>
          <p>This wasn't fat loss—it was tissue reactivation.</p>
          <p>
            The area became more metabolically active, the fascia regained
            mobility, and the muscle was able to properly engage again.
          </p>
          <p>
            The "pouch" appearance diminished significantly without any weight
            change.
          </p>
        </TextSection>

        {/* Case Example 3: Monica */}
        <TextSection>
          <h3>
            Case Example #3: Monica, 47 – The "I've Tried Everything" Case
          </h3>
          <p>Monica walked into my office with a list.</p>
          <p>
            She'd tried: keto, intermittent fasting, Pilates, barre classes,
            waist trainers, three different "belly-blasting" supplements, and
            two rounds of CoolSculpting on her lower abdomen.
          </p>
          <p>
            "The CoolSculpting destroyed my savings and did absolutely nothing,"
            she said, on the verge of tears.
          </p>
          <p>"I don't understand what I'm doing wrong."</p>
          <p>
            But at this point I already knew: she wasn't doing anything wrong.
          </p>
          <p>
            <strong>Her approach:</strong> Used ReSculpt 15 minutes per day, 3
            days per week, while continuing her current Pilates routine.
          </p>
          <p>
            <strong>Timeline:</strong>
          </p>
          <ul>
            <li>
              <strong>Week 4:</strong> "I almost quit because I wasn't seeing
              anything. Then I put on a dress I wore last month and it fit way
              better around my stomach."
            </li>
            <li>
              <strong>Week 7:</strong> "My Pilates instructor asked what I
              changed. She said my core engagement during class is noticeably
              stronger."
            </li>
            <li>
              <strong>Week 12:</strong> "I finally understand what happened. It
              wasn't about losing fat. My body just needed to remember how to
              use that area again."
            </li>
          </ul>
        </TextSection>

        {/* IMAGE 13 - Monica's case example and results */}
        <div className="image-section">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F35b8f559a7824701842ff7a1707bc62d?format=webp&width=800"
            alt="Monica's case example and results"
            style={{
              aspectRatio: "1.78",
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              minHeight: "20px",
              minWidth: "20px",
              overflow: "hidden",
            }}
            className="section-image"
          />
        </div>

        {/* Monica Notes */}
        <TextSection>
          <p>
            <strong>My notes:</strong> Monica's case taught me something
            critical.
          </p>
          <p>
            Many women are trying to burn fat in an area that's not
            metabolically active enough to release it.
          </p>
          <p>
            Once we reactivated the tissue, her existing healthy habits finally
            had something to work with.
          </p>
          <p>
            She lost an additional 1.5 inches in her lower abdomen between weeks
            8-12, despite no changes to diet or exercise.
          </p>
        </TextSection>

        {/* CTA Before Why This Technology Works */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>

        {/* Why This Technology Works */}
        <TextSection>
          <h2>Why This Technology Works (And Why Most Devices Don't)</h2>
          <p>
            After watching woman after woman experience similar results, I
            started understanding exactly why ReSculpt succeeds where other
            approaches fail.
          </p>
          <p>Here's the difference:</p>
          <p>
            Most at-home devices use single-frequency vibration—essentially a
            strong massage that feels good in the moment.
          </p>
          <p>
            But they can't penetrate deep enough to affect fascial mobility or
            muscle activation.
          </p>
          <p>
            You might feel temporary smoothness from increased surface
            circulation.
          </p>
          <p>But the underlying problem remains untouched.</p>
          <p>
            <b>
              ReSculpt uses Multi-Layer Stimulation Reset™—a system that
              delivers layered frequencies simultaneously
            </b>
            , each calibrated to reach a different tissue depth:
          </p>
          <ul>
            <li>
              Surface frequency stimulates skin microcirculation and lymphatic
              drainage
            </li>
            <li>
              Mid-layer frequency mobilizes fascial tissue and breaks up
              adhesions
            </li>
            <li>
              Deep frequency activates neuromuscular response and restores
              metabolic signaling
            </li>
          </ul>
          <p>Think of it like a defibrillator for dormant tissue.</p>
          <p>It doesn't burn fat or melt anything away.</p>
          <p>It restarts the metabolic conversation that had gone silent.</p>
          <p>Once that communication is restored:</p>
          <ul>
            <li>Blood flow increases to the area</li>
            <li>Fascia regains mobility</li>
            <li>Muscle can engage properly again</li>
            <li>Fat cells start responding to normal metabolic signals</li>
          </ul>
          <p>
            And then your healthy habits start working on that area again
            (finally).
          </p>
        </TextSection>

        {/* IMAGE 14 - How the technology works */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F71ea24b2a429429aa8ab1feb8b5b2c04"
          alt="How the technology works"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* Setting Realistic Expectations */}
        <TextSection>
          <h2>Setting Realistic Expectations (Because I'm A Doctor)</h2>
          <p>I need to be very clear about something:</p>
          <p>
            <b>This is not magic.</b>
          </p>
          <p>
            <b>This is metabolic reactivation.</b>
          </p>
          <p>
            If you're looking for a device that melts fat while you sleep, this
            isn't it.
          </p>
          <p>If you want abs without effort, this won't give you that.</p>
          <p>But if you're someone who:</p>
          <ul>
            <li>Eats well and exercises consistently</li>
            <li>Has lost weight everywhere except that lower belly pouch</li>
            <li>
              Feels like that specific area "stopped responding" after hormonal
              changes
            </li>
            <li>
              Has tried everything and can't understand why that area won't
              budge
            </li>
          </ul>
          <p>...then the problem likely isn't your effort.</p>
          <p>It's tissue dormancy.</p>
          <p>And that's exactly what this technology addresses.</p>
          <p>You still need to maintain healthy habits.</p>
          <p>
            You still need to be patient (most of the women saw noticeable
            changes between weeks 4-8, with continued improvement through week
            12).
          </p>
          <p>
            But those habits will finally work with you instead of against
            silent tissue.
          </p>
        </TextSection>

        {/* Why I'm Comfortable Sharing This */}
        <TextSection>
          <h2>Why I'm Comfortable Sharing This</h2>
          <p>As a physician, I don't typically recommend at-home devices.</p>
          <p>Most of them are overpriced and under-researched.</p>
          <p>But ReSculpt is different for three reasons:</p>
          <h3>1. The mechanism is scientifically sound.</h3>
          <p>Multi-Layer Stimulation isn't new technology.</p>
          <p>
            It's been used in clinical settings for neuromuscular re-education
            and post-surgical rehabilitation for years.
          </p>
          <p>This device makes it accessible for at-home use.</p>
          <h3>
            2. It's non-invasive with no contraindications, and it offers a
            proper clinical trial period.
          </h3>
          <p>
            Unlike injections, surgery, or even some aggressive manual
            therapies, <b>this has an extremely low risk profile</b>.
          </p>
          <p>The worst case scenario is it doesn't work for you.</p>
          <p>
            And they offer a <b>100-day money-back guarantee</b> for exactly
            that reason.
          </p>
          <p>Why 100 days specifically?</p>
          <p>Because tissue reactivation isn't instant.</p>
          <p>
            It takes 4-6 weeks of consistent use for metabolically dormant
            tissue to "wake up" and start responding to signals again.
          </p>
          <p>
            A 30-day guarantee wouldn't be enough time to see if your tissue
            reactivates.
          </p>
          <p>100 days is a genuine clinical trial period.</p>
          <h3>3. It addresses the actual problem, not the symptom.</h3>
          <p>Most treatments try to burn fat or tighten skin.</p>
          <p>This reactivates tissue metabolism.</p>
          <p>
            Once the tissue is awake again, your body can do what it's supposed
            to do naturally.
          </p>
        </TextSection>

        {/* IMAGE 15 - Clinical research and evidence */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2Fbe9c7a0950fb4beeaa0dbc89ab323ff2"
          alt="Clinical research and evidence"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* A Note on Availability */}
        <TextSection>
          <h2>A Note on Availability (And Why I'm Sharing This)</h2>
          <p>
            After seeing consistent results with ReSculpt across multiple women,{" "}
            <b>
              I reached out to Ovaliss (the company behind the device) and asked
              if they'd be willing to offer a special arrangement for women
              reading this article
            </b>
            .
          </p>
          <p>Here's why I did that:</p>
          <p>
            Most of the women who've had success with this device found it
            through hours of late-night research.
          </p>
          <p>
            They were comparing devices, reading reviews, second-guessing
            themselves.
          </p>
          <p>
            They told me they wished they'd found it sooner—and wished they
            hadn't paid full price while they were still skeptical.
          </p>
          <p>
            So I negotiated something I rarely do: a reduced introductory price
            specifically for readers of this article.
          </p>
          <p>
            <b>
              Instead of the standard $169 AUD, you can get ReSculpt for just
              $119 AUD.
            </b>
          </p>
          <p>That's $50 off, not because the device is discounted.</p>
          <p>
            But because Ovaliss agreed that women dealing with metabolic tissue
            dormancy shouldn't have to pay full price.
          </p>
          <p>
            Not while they're still building belief that their bodies can
            respond again.
          </p>
          <p>
            <b>This pricing is only available through the link below.</b>
          </p>
          <p>I don't know how long they'll maintain it.</p>
          <p>
            (They mentioned it's based on current inventory levels, and once
            those units move, pricing returns to standard.)
          </p>
          <p>
            <strong>Here's what you get:</strong>
          </p>
          <ul>
            <li>
              ReSculpt device ($119 <strike>$169</strike> AUD)
            </li>
            <li>Free shipping</li>
            <li>
              100-day money-back guarantee (full reactivation trial period)
            </li>
            <li>Free ReSculpt Usage Guide</li>
          </ul>
        </TextSection>

        {/* Primary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>

        {/* My Recommendation */}
        <TextSection>
          <h2>My Recommendation</h2>
          <p>
            If your lower belly has been unresponsive despite your best efforts.
          </p>
          <p>
            If you've felt that frustrating sense of "I'm doing everything
            right, why isn't this area changing?"
          </p>
          <p>
            <b>You don't need another diet.</b>
          </p>
          <p>
            <b>You don't need more cardio.</b>
          </p>
          <p>
            <b>You don't need to "try harder."</b>
          </p>
          <p>You need to wake up tissue that went dormant.</p>
          <p>
            And that's exactly what ReSculpt is designed to do, all in the
            comfort of your own home, on your own schedule.
          </p>
          <p>If it works, you'll know.</p>
          <p>The area will start feeling different during core engagement.</p>
          <p>Then you'll start seeing changes in how clothes fit.</p>
          <p>Then you'll see visible contour improvement.</p>
          <p>
            <b>If it doesn't work, you return it.</b>
          </p>
          <p>No risk.</p>
          <p>
            But based on what I've seen in my office, and based on the mechanism
            itself...
          </p>
          <p>
            I believe any woman dealing with post-hormonal lower belly
            resistance will see meaningful improvement.
          </p>
          <p>Because the problem was never willpower.</p>
          <p>It was tissue that needed to be brought back online.</p>
        </TextSection>

        {/* IMAGE 16 - Final message and encouragement */}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F310e5dbc08df4ac4b4ffe8becccf5fde%2F92fb8724eac14e2ab0144f9fac058558"
          alt="Final message and encouragement"
          style={{
            aspectRatio: "1.78",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            marginTop: "20px",
            minHeight: "20px",
            minWidth: "20px",
            overflow: "hidden",
          }}
        />

        {/* Secondary CTA Section */}
        <div className="cta-section">
          <div className="cta-container">
            <div className="cta-group">
              <CTAButton href="https://www.ovaliss.com/products/resculpt">
                Check ReSculpt Availability
              </CTAButton>
            </div>
          </div>
        </div>
      </main>

      <ArticleFooter />

      <StickyCTA
        triggerRef={drMitchellSectionRef}
        href="https://www.ovaliss.com/products/resculpt"
      >
        Check ReSculpt Availability
      </StickyCTA>
    </div>
  );
}
