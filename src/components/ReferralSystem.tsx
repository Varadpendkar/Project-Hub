import { motion } from "framer-motion";
import "./ReferralSystem.css";

export function ReferralSystem() {
  const referralTiers = [
    {
      referrals: 1,
      projects: "1 Project",
      commission: "10%",
      example: "₹10,000 → ₹1,000",
    },
    {
      referrals: 3,
      projects: "3 Projects",
      commission: "30%",
      example: "₹30,000 → ₹3,000",
    },
    {
      referrals: 5,
      projects: "5 Projects",
      commission: "50%",
      example: "₹50,000 → ₹5,000",
    },
    {
      referrals: 10,
      projects: "10+ Projects",
      commission: "100%",
      example: "₹100,000+ → ₹10,000+",
    },
  ];

  return (
    <section className="referral-system">
      <div className="container">
        <motion.div
          className="referral-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Earn While You Share</h2>
          <p>
            Refer projects to your friends and earn 10% commission on each
            referral
          </p>
        </motion.div>

        <div className="referral-content">
          <motion.div
            className="referral-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="referral-info">
              <h3>How It Works</h3>
              <ul className="referral-steps">
                <li>
                  <span className="step-num">1</span>
                  <div>
                    <strong>Share Your Code</strong>
                    <p>Get your unique referral code and share it</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <div>
                    <strong>Friends Join</strong>
                    <p>Your friends use your code to join</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <div>
                    <strong>They Purchase</strong>
                    <p>They buy projects or packages</p>
                  </div>
                </li>
                <li>
                  <span className="step-num">4</span>
                  <div>
                    <strong>You Earn</strong>
                    <p>Get 10% commission instantly</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="referral-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="referral-tiers">
              <h3>Commission Tiers</h3>
              <p className="tier-subtitle">Earn more by referring more</p>

              <div className="tier-cards">
                {referralTiers.map((tier, idx) => (
                  <div key={idx} className="tier-card">
                    <div className="tier-projects">{tier.projects}</div>
                    <div className="tier-commission">{tier.commission}</div>
                    <div className="tier-example">{tier.example}</div>
                  </div>
                ))}
              </div>

              <div className="referral-cta">
                <button className="referral-btn">Get Your Referral Code</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
