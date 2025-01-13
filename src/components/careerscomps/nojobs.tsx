import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

function Nojobs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="rounded-xl overflow-hidden bg-muted/5 border border-muted/20 backdrop-blur-sm p-6 text-center">
        <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
        <p className="text-muted-foreground">
          Currently there are no job roles available. We will update soon with new opportunities.
        </p>
      </div>
    </motion.div>
  )
}

export default Nojobs
