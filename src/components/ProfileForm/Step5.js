import { Container } from '@mui/material';
import React from 'react';
import StepForm from './StepForm';

const Step5 = (props) => {
  return (
    <Container>
      <StepForm
        {...props}
        title='Network Reach'
        description={`This has to do with people you know and you can connect with. Identify their influence, knowledge and thinking and see how you can positively leverage it. List your network reach based on the sectors they can influence for you.`}
        groupBy={(option) => option.category}
        multiple
        options={[
          { name: 'Airlines/Aviation', category: 'Accounting' },
          { name: 'Alternative Dispute Resolution', category: 'Accounting' },
          { name: 'Alternative Medicine', category: 'Accounting' },
          { name: 'Animation', category: 'Accounting' },
          { name: 'Apparel/Fashion', category: 'Accounting' },
          { name: 'Architecture/Planning', category: 'Accounting' },
          { name: 'Arts/Crafts', category: 'Accounting' },
          { name: 'Automotive', category: 'Accounting' },
          { name: 'Aviation/Aerospace', category: 'Accounting' },
          { name: 'Banking/Mortgage', category: 'Accounting' },
          { name: 'Biotechnology/ Greentech', category: 'Accounting' },
          { name: 'Broadcast Media', category: 'Accounting' },
          { name: 'Building Materials', category: 'Accounting' },
          { name: 'Business Supplies/Equipment', category: 'Accounting' },
          {
            name: 'Capital Markets/Hedge Fund/Private Equity',
            category: 'Accounting',
          },
          { name: 'Chemicals', category: 'Accounting' },
          { name: 'Civic/Social Organization', category: 'Accounting' },
          { name: 'Civil Engineering', category: 'Accounting' },
          { name: 'Commercial Real Estate', category: 'Accounting' },
          { name: 'Computer Games', category: 'Accounting' },
          { name: 'Computer Hardware', category: 'Accounting' },
          { name: 'Computer Networking', category: 'Accounting' },
          { name: 'Computer Software/Engineering', category: 'Accounting' },
          { name: 'Computer/Network Security', category: 'Accounting' },
          { name: 'Construction', category: 'Accounting' },
          { name: 'Consumer Electronics', category: 'Accounting' },
          { name: 'Consumer Goods', category: 'Accounting' },
          { name: 'Consumer Services', category: 'Accounting' },
          { name: 'Cosmetics', category: 'Accounting' },

          {
            name: 'Religious Institutions',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Renewables/ Environment',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Research Industry',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Restaurants',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Retail Industry',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Security/Investigations',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Semiconductors',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Shipbuilding',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Sporting Goods',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Sports', category: 'Recreational Facilities/ Services' },
          {
            name: 'Staffing/Recruiting',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Supermarkets',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Telecommunications',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Textiles', category: 'Recreational Facilities/ Services' },
          {
            name: 'Think Tanks',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Tobacco', category: 'Recreational Facilities/ Services' },
          {
            name: 'Translation/ Localization',
            category: 'Recreational Facilities/ Services',
          },
          {
            name: 'Transportation',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Utilities', category: 'Recreational Facilities/ Services' },
          {
            name: 'Venture Capital/VC',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Veterinary', category: 'Recreational Facilities/ Services' },
          {
            name: 'Warehousing',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Wholesale', category: 'Recreational Facilities/ Services' },
          {
            name: 'Wine/Spirits',
            category: 'Recreational Facilities/ Services',
          },
          { name: 'Wireless', category: 'Recreational Facilities/ Services' },
          {
            name: 'Writing/Editing',
            category: 'Recreational Facilities/ Services',
          },

          { name: 'Motion Pictures/Film', category: 'Mining/Metals' },
          { name: 'Museums/Institutions', category: 'Mining/Metals' },
          { name: 'Music', category: 'Mining/Metals' },
          { name: 'Nanotechnology', category: 'Mining/Metals' },
          { name: 'Newspapers/Journalism', category: 'Mining/Metals' },
          { name: 'Non-Profit/Volunteering', category: 'Mining/Metals' },
          { name: 'Oil/Energy/Solar/Greentech', category: 'Mining/Metals' },
          { name: 'Online Publishing', category: 'Mining/Metals' },
          { name: 'Other Industry', category: 'Mining/Metals' },
          { name: 'Outsourcing/Offshoring', category: 'Mining/Metals' },
          { name: 'Package/Freight Delivery', category: 'Mining/Metals' },
          { name: 'Packaging/Containers', category: 'Mining/Metals' },
          { name: 'Paper/Forest Products', category: 'Mining/Metals' },
          { name: 'Performing Arts', category: 'Mining/Metals' },
          { name: 'Pharmaceuticals', category: 'Mining/Metals' },
          { name: 'Philanthropy', category: 'Mining/Metals' },
          { name: 'Photography', category: 'Mining/Metals' },
          { name: 'Plastics', category: 'Mining/Metals' },
          { name: 'Political Organization', category: 'Mining/Metals' },
          { name: 'Primary/Secondary Education', category: 'Mining/Metals' },
          { name: 'Printing', category: 'Mining/Metals' },
          { name: 'Professional Training', category: 'Mining/Metals' },
          { name: 'Program Development', category: 'Mining/Metals' },
          { name: 'Public Relations/PR', category: 'Mining/Metals' },
          { name: 'Public Safety', category: 'Mining/Metals' },
          { name: 'Publishing Industry', category: 'Mining/Metals' },
          { name: 'Railroad Manufacture', category: 'Mining/Metals' },
          { name: 'Ranching', category: 'Mining/Metals' },
          { name: 'Real Estate/Mortgage', category: 'Mining/Metals' },

          {
            name: 'Industrial Automation',
            category: 'Individual/Family Services',
          },
          {
            name: 'Information Services',
            category: 'Individual/Family Services',
          },
          {
            name: 'Information Technology/IT',
            category: 'Individual/Family Services',
          },
          { name: 'Insurance', category: 'Individual/Family Services' },
          {
            name: 'International Affairs',
            category: 'Individual/Family Services',
          },
          {
            name: 'International Trade/Development',
            category: 'Individual/Family Services',
          },
          { name: 'Internet', category: 'Individual/Family Services' },
          {
            name: 'Investment Banking/Venture',
            category: 'Individual/Family Services',
          },
          {
            name: 'Investment Management/Hedge Fund/Private Equity',
            category: 'Individual/Family Services',
          },
          { name: 'Judiciary', category: 'Individual/Family Services' },
          { name: 'Law Enforcement', category: 'Individual/Family Services' },
          {
            name: 'Law Practice/Law Firms',
            category: 'Individual/Family Services',
          },
          { name: 'Legal Services', category: 'Individual/Family Services' },
          {
            name: 'Legislative Office',
            category: 'Individual/Family Services',
          },
          { name: 'Leisure/Travel', category: 'Individual/Family Services' },
          { name: 'Library', category: 'Individual/Family Services' },
          {
            name: 'Logistics/Procurement',
            category: 'Individual/Family Services',
          },
          {
            name: 'Luxury Goods/Jewelry',
            category: 'Individual/Family Services',
          },
          { name: 'Machinery', category: 'Individual/Family Services' },
          {
            name: 'Management Consulting',
            category: 'Individual/Family Services',
          },
          { name: 'Maritime', category: 'Individual/Family Services' },
          { name: 'Market Research', category: 'Individual/Family Services' },
          {
            name: 'Marketing/Advertising/Sales',
            category: 'Individual/Family Services',
          },
          {
            name: 'Mechanical or Industrial Engineering',
            category: 'Individual/Family Services',
          },
          { name: 'Media Production', category: 'Individual/Family Services' },
          { name: 'Medical Equipment', category: 'Individual/Family Services' },
          { name: 'Medical Practice', category: 'Individual/Family Services' },
          {
            name: 'Mental Health Care',
            category: 'Individual/Family Services',
          },
          { name: 'Military Industry', category: 'Individual/Family Services' },

          { name: 'Defense/Space', category: 'Dairy' },
          { name: 'Design', category: 'Dairy' },
          { name: 'E-Learning', category: 'Dairy' },
          { name: 'Education Management', category: 'Dairy' },
          { name: 'Electrical/Electronic Manufacturing', category: 'Dairy' },
          { name: 'Entertainment/Movie Production', category: 'Dairy' },
          { name: 'Environmental Services', category: 'Dairy' },
          { name: 'Events Services', category: 'Dairy' },
          { name: 'Executive Office', category: 'Dairy' },
          { name: 'Facilities Services', category: 'Dairy' },
          { name: 'Farming', category: 'Dairy' },
          { name: 'Financial Services', category: 'Dairy' },
          { name: 'Fine Art', category: 'Dairy' },
          { name: 'Fishery', category: 'Dairy' },
          { name: 'Food Production', category: 'Dairy' },
          { name: 'Food/Beverages', category: 'Dairy' },
          { name: 'Fundraising', category: 'Dairy' },
          { name: 'Furniture', category: 'Dairy' },
          { name: 'Gambling/Casinos', category: 'Dairy' },
          { name: 'Glass/Ceramics/Concrete', category: 'Dairy' },
          { name: 'Government Administration', category: 'Dairy' },
          { name: 'Government Relations', category: 'Dairy' },
          { name: 'Graphic Design/Web Design', category: 'Dairy' },
          { name: 'Health/Fitness', category: 'Dairy' },
          { name: 'Higher Education/Acadamia', category: 'Dairy' },
          { name: 'Hospital/Health Care', category: 'Dairy' },
          { name: 'Hospitality', category: 'Dairy' },
          { name: 'Human Resources/HR', category: 'Dairy' },
          { name: 'Import/Export', category: 'Dairy' },
        ]}
      />
    </Container>
  );
};

export default Step5;
